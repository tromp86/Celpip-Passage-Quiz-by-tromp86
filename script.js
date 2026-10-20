function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeQueue(length, avoidFirst = null) {
  let q = shuffle([...Array(length).keys()]);
  if (avoidFirst !== null && q[0] === avoidFirst && length > 1) {
    // swap the first element with another one, so it doesn't repeat
    const swapWith = 1 + Math.floor(Math.random() * (length - 1));
    [q[0], q[swapWith]] = [q[swapWith], q[0]];
  }
  return q;
}

// Randomizes which text comes next, without repeating the same text
// twice in a row at a reshuffle boundary.
class TextOrder {
  constructor(count) {
    this.count = count;
    this.lastIndex = null;
    this.queue = makeQueue(count);
  }

  next() {
    if (this.queue.length === 0) {
      this.queue = makeQueue(this.count, this.lastIndex);
    }
    const idx = this.queue.shift();
    this.lastIndex = idx;
    return idx;
  }
}

/* =========================================================
   APP STATE

   One "run" = one text, all of its questions asked once each
   in a random order, then the score. Starting again (or the
   switch-text button) moves on to a different text, chosen so
   it never repeats the text that was just active.
   ========================================================= */

let textOrder = new TextOrder(TEXTS.length);
let currentTextIdx = null;
let questionQueue = [];       // remaining question indices for the active text, this run
let totalQuestions = 0;       // = active text's questions.length
let currentQuestionIdx = null;
let answered = false;
let answeredCount = 0;
let correctCount = 0;

// Remembers, per text id, the last question asked the previous time
// that text was active — so if the same text comes up again later,
// its first question won't repeat the one it ended on last time.
const lastQuestionByTextId = {};

const els = {
  progressCounter: document.getElementById("progressCounter"),
  quizContent: document.getElementById("quizContent"),
  textTitle: document.getElementById("textTitle"),
  textBody: document.getElementById("textBody"),
  memoryRing: document.getElementById("memoryRing"),
  questionText: document.getElementById("questionText"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("nextBtn"),
  switchTextBtn: document.getElementById("switchTextBtn"),
  textIdInput: document.getElementById("textIdInput"),
  resultScreen: document.getElementById("resultScreen"),
  resultGrade: document.getElementById("resultGrade"),
  resultDetails: document.getElementById("resultDetails"),
  restartBtn: document.getElementById("restartBtn"),
  textNumber: document.getElementById("textNumber"),
  speakBtn: document.getElementById("speakBtn"),
};

/* =========================================================
   TEXT-TO-SPEECH (Kokoro in a Web Worker, free, no freezing)
   Must be declared BEFORE startNewText() is called below.
   Needs tts-worker.js next to this file.
   ========================================================= */

// ---- SETTINGS: change these two ----
// US female: af_heart af_bella af_nicole af_sarah af_sky af_nova af_river af_jessica af_kore af_aoede af_alloy
// US male:   am_michael am_adam am_eric am_liam am_echo am_onyx am_fenrir am_puck
// UK female: bf_emma bf_isabella bf_alice bf_lily
// UK male:   bm_george bm_fable bm_daniel bm_lewis
const VOICE = "af_heart";
const SPEED = 0.8; // 0.6 slow ... 1 normal ... 1.4 fast
// ------------------------------------

let ttsWorker = null;
let speaking = false;
let paused = false;
const IDLE_LABEL = els.speakBtn.textContent; // original button text
let speakToken = 0;
let actx = null;
let currentSource = null;
let currentTrack = null;
let reqCounter = 0;
const tracks = {};   // "textId|voice|speed" -> { reqId, key, chunks, done, error, waiters }
const reqMap = {};   // reqId -> track

function wake(track) {
  track.waiters.splice(0).forEach((f) => f());
}

function waitFor(track) {
  return new Promise((res) => track.waiters.push(res));
}

function onWorkerMessage(e) {
  const m = e.data;
  if (m.type === "device") {
    console.log("[TTS] running on", m.device);
    return;
  }
  const track = reqMap[m.id];
  if (m.type === "chunk" && track) {
    track.chunks.push({ audio: m.audio, rate: m.rate });
    wake(track);
  } else if (m.type === "done" && track) {
    track.done = true;
    wake(track);
  } else if (m.type === "error") {
    console.error("[TTS] worker error:", m.message);
    if (track) {
      track.error = m.message;
      track.done = true;
      wake(track);
    }
  }
}

function getWorker() {
  if (!ttsWorker) {
    ttsWorker = new Worker("tts-worker.js", { type: "module" });
    ttsWorker.onmessage = onWorkerMessage;
    ttsWorker.onerror = (e) => console.error("[TTS] worker crashed", e.message || e);
    ttsWorker.postMessage({ type: "init" }); // start downloading the model right away
  }
  return ttsWorker;
}

// starts generating (once per text) and returns its track
function requestTrack(textId, fullText) {
  const key = `${textId}|${VOICE}|${SPEED}`;
  if (!tracks[key]) {
    const reqId = ++reqCounter;
    const track = { reqId, key, chunks: [], done: false, error: null, waiters: [] };
    tracks[key] = track;
    reqMap[reqId] = track;
    getWorker().postMessage({
      type: "speak",
      id: reqId,
      text: fullText,
      voice: VOICE,
      speed: SPEED,
    });
  }
  return tracks[key];
}

function playClip(clip) {
  return new Promise((res) => {
    const buf = actx.createBuffer(1, clip.audio.length, clip.rate);
    buf.copyToChannel(clip.audio, 0);
    const src = actx.createBufferSource();
    src.buffer = buf;
    src.connect(actx.destination);
    src.onended = res;
    currentSource = src;
    src.start();
  });
}

function stopSpeech() {
  speakToken++;
  speaking = false;
  paused = false;
  els.speakBtn.textContent = IDLE_LABEL;
  if (actx && actx.state === "suspended") actx.resume(); // so the stopped clip can finish
  if (currentSource) {
    try { currentSource.stop(); } catch (e) {}
    currentSource = null;
  }
  // stop generating the rest of an unfinished text
  if (currentTrack && !currentTrack.done) {
    if (ttsWorker) ttsWorker.postMessage({ type: "cancel", id: currentTrack.reqId });
    delete tracks[currentTrack.key];
    delete reqMap[currentTrack.reqId];
    wake(currentTrack);
  }
  currentTrack = null;
}

// Reads the active text aloud. Click to pause, click again to resume
// from the same spot. Switching to another text stops the reading.
async function speakText() {
  if (speaking) {
    if (paused) {
      paused = false;
      actx.resume();
      els.speakBtn.textContent = "⏸ Pause";
    } else {
      paused = true;
      actx.suspend();
      els.speakBtn.textContent = "▶ Resume";
    }
    return;
  }
  // must happen right on click, before any await
  actx = actx || new AudioContext();
  actx.resume();

  speaking = true;
  const token = ++speakToken;

  const text = TEXTS[currentTextIdx];
  const paragraphs = Array.isArray(text.body)
    ? text.body
    : text.body.split(/\n\s*\n/);
  const title = text.title.trim();
  const parts = [/[.!?]$/.test(title) ? title : title + ".", ...paragraphs]
    .map((p) => p.trim())
    .filter(Boolean);

  const setStatus = (s) => (els.speakBtn.textContent = s);

  try {
    setStatus("⏳ Loading voice...");
    const track = requestTrack(text.id, parts.join("\n\n"));
    currentTrack = track;

    let i = 0;
    while (true) {
      if (token !== speakToken) return;
      if (i < track.chunks.length) {
        if (!paused) setStatus("⏸ Pause");
        await playClip(track.chunks[i++]);
      } else if (track.done) {
        if (track.error) throw new Error(track.error);
        break;
      } else {
        await waitFor(track);
      }
    }
  } catch (e) {
    console.error("[TTS] failed", e);
    alert("TTS error: " + e.message);
  } finally {
    if (token === speakToken) {
      setStatus(IDLE_LABEL);
      speaking = false;
      paused = false;
      currentSource = null;
    }
  }
}

/* =========================================================
   RENDERING
   ========================================================= */

// Splits a text's "body" into paragraphs and renders each as its own <p>.
// Accepts either a plain string (paragraphs separated by a blank line,
// i.e. "\n\n") or an array of paragraph strings.
function renderParagraphs(container, body) {
  container.innerHTML = "";
  const paragraphs = Array.isArray(body)
    ? body
    : body.split(/\n\s*\n/);

  paragraphs
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .forEach((p) => {
      const el = document.createElement("p");
      el.textContent = p;
      container.appendChild(el);
    });
}

function renderProgressDots() {
  const text = TEXTS[currentTextIdx];
  els.memoryRing.innerHTML = "";
  for (let i = 0; i < text.questions.length; i++) {
    const dot = document.createElement("span");
    dot.className = "memory-ring__dot";
    if (i < answeredCount) dot.classList.add("used");
    if (i === answeredCount) dot.classList.add("current");
    els.memoryRing.appendChild(dot);
  }
}

/* =========================================================
   RUN CONTROL
   ========================================================= */

// Starts a fresh run on the text at the given index in TEXTS:
// builds a shuffled queue of all its questions and resets the score.
function startRun(idx) {
  // stop any speech from the previous text
  stopSpeech();

  currentTextIdx = idx;
  const text = TEXTS[currentTextIdx];

  totalQuestions = text.questions.length;
  questionQueue = makeQueue(totalQuestions, lastQuestionByTextId[text.id] ?? null);
  answeredCount = 0;
  correctCount = 0;

  els.nextBtn.textContent = "Next →";
  els.resultScreen.classList.add("hidden");
  els.quizContent.classList.remove("hidden");

  showQuestion();
}

// Picks the next random text (different from the one just active).
function startNewText() {
  startRun(textOrder.next());
}

// Type just the number (e.g. 4) and it finds the text with id "t4".
function startTextById(input) {
  const num = String(input).trim().replace(/\D/g, ""); // keep digits only
  if (!num) return;

  const wanted = "t" + Number(num); // "04" -> "t4"
  const idx = TEXTS.findIndex((t) => String(t.id).toLowerCase() === wanted);

  if (idx === -1) {
    alert(`Text ${wanted} not found`);
    return;
  }

  // so the random order won't repeat this text right after a reshuffle
  textOrder.lastIndex = idx;
  startRun(idx);
}

function showQuestion() {
  const text = TEXTS[currentTextIdx];
  document.getElementById("passageCount").textContent = TEXTS.length;
  els.progressCounter.textContent = `${answeredCount} / ${totalQuestions}`;
  els.textTitle.textContent = text.title;
  els.textNumber.textContent = "Current text number: " + text.id.replace(/\D/g, "");
  renderParagraphs(els.textBody, text.body);

  currentQuestionIdx = questionQueue.shift();
  if (questionQueue.length === 0) {
    // this was the last question of the run — remember it so the
    // next time this text comes up, it won't be asked first again
    lastQuestionByTextId[text.id] = currentQuestionIdx;
  }
  const question = text.questions[currentQuestionIdx];

  renderProgressDots();

  els.questionText.textContent = question.q;
  els.options.innerHTML = "";
  answered = false;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.nextBtn.disabled = true;

  question.options.forEach((optionText, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.textContent = optionText;
    btn.addEventListener("click", () => handleAnswer(i, btn, question));
    els.options.appendChild(btn);
  });
}

function handleAnswer(selectedIdx, btn, question) {
  if (answered) return;
  answered = true;

  const buttons = [...els.options.children];
  buttons.forEach((b) => (b.disabled = true));

  answeredCount++;

  if (selectedIdx === question.correct) {
    correctCount++;
    // btn.classList.add("correct");
    els.feedback.textContent = "Correct!";
    // els.feedback.classList.add("ok");
  } else {
    // btn.classList.add("wrong");
    // buttons[question.correct].classList.add("correct");
    els.feedback.textContent = "Incorrect.";
    // els.feedback.classList.add("err");
  }

  renderProgressDots();

  els.nextBtn.disabled = false;
  if (answeredCount >= totalQuestions) {
    els.nextBtn.textContent = "Show Result →";
  }
}

/* =========================================================
   GRADE ON A 12-POINT SCALE
   grade = (correct / total) * 12, rounded, clamped to 1-12
   ========================================================= */
function computeGrade() {
  const raw = (correctCount / totalQuestions) * 12;
  return Math.min(12, Math.max(1, Math.round(raw)));
}

function showResult() {
  stopSpeech();
  els.quizContent.classList.add("hidden");
  els.resultScreen.classList.remove("hidden");
  els.resultGrade.textContent = computeGrade();
  els.resultDetails.textContent =
    `Correct answers: ${correctCount} of ${totalQuestions}`;
}

/* =========================================================
   EVENTS
   ========================================================= */

els.nextBtn.addEventListener("click", () => {
  if (answeredCount >= totalQuestions) {
    showResult();
    return;
  }
  showQuestion();
});

// Abandons the current text's run and jumps straight to a different one.
els.switchTextBtn.addEventListener("click", startNewText);

// Jump to a specific text by its number, 1.5s after the last keystroke.
let idSearchTimer = null;
els.textIdInput.addEventListener("input", () => {
  clearTimeout(idSearchTimer);
  idSearchTimer = setTimeout(() => startTextById(els.textIdInput.value), 1500);
});
// Enter still jumps immediately
els.textIdInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clearTimeout(idSearchTimer);
    startTextById(els.textIdInput.value);
  }
});

// Read the active text aloud (click again to stop).
els.speakBtn.addEventListener("click", speakText);

// After the result screen, start again with a different text.
els.restartBtn.addEventListener("click", startNewText);

/* =========================================================
   THEME
   ========================================================= */

const themeToggleBtn = document.getElementById("themeToggleBtn");
const root = document.documentElement;

let isDark = false;

function applyTheme() {
  if (isDark) {
    root.classList.add("theme-dark");
    root.classList.remove("theme-light");
    themeToggleBtn.querySelector(".theme-toggle__icon").textContent = "🌞";
  } else {
    root.classList.add("theme-light");
    root.classList.remove("theme-dark");
    themeToggleBtn.querySelector(".theme-toggle__icon").textContent = "🌙";
  }
}

themeToggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme();
});

applyTheme();

/* =========================================================
   START
   ========================================================= */

getWorker(); // start loading the voice model in the background
startNewText();
