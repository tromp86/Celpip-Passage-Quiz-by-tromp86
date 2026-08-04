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
  resultScreen: document.getElementById("resultScreen"),
  resultGrade: document.getElementById("resultGrade"),
  resultDetails: document.getElementById("resultDetails"),
  restartBtn: document.getElementById("restartBtn"),
};

// Splits a text's "body" into paragraphs and renders each as its own <p>.
// Accepts either a plain string (paragraphs separated by a blank line,
// i.e. "\n\n") or an array of paragraph strings — paste your text either
// way and it'll come out with proper paragraphs.
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

// Starts a fresh run: picks the next text (different from the one
// just active) and builds a shuffled queue of all its questions.
function startNewText() {
  currentTextIdx = textOrder.next();
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

function showQuestion() {
  const text = TEXTS[currentTextIdx];

  els.progressCounter.textContent = `${answeredCount + 1} / ${totalQuestions}`;
  els.textTitle.textContent = text.title;
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
  els.quizContent.classList.add("hidden");
  els.resultScreen.classList.remove("hidden");
  els.resultGrade.textContent = computeGrade();
  els.resultDetails.textContent =
    `Correct answers: ${correctCount} of ${totalQuestions}`;
}

els.nextBtn.addEventListener("click", () => {
  if (answeredCount >= totalQuestions) {
    showResult();
    return;
  }
  showQuestion();
});

// Abandons the current text's run and jumps straight to a different one.
els.switchTextBtn.addEventListener("click", startNewText);

// After the result screen, start again with a different text.
els.restartBtn.addEventListener("click", startNewText);

startNewText();
