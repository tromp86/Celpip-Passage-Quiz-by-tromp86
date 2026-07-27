/* =========================================================
   DATA
   Replace this array with your own texts. Each text has
   exactly 5 "questions". Each question is a "q" string,
   an "options" array, and a "correct" index.

   "body" can be a paragraph-separated string — just paste
   your text with a blank line between paragraphs, same as
   you'd write it anywhere else — or an array of paragraph
   strings if you prefer. Either way it renders as separate
   <p> elements.
   ========================================================= */
const TEXTS = [
 {
  id: "t1",
  title: "The Rise of Flexible Workspaces",
  body: `During the last decade, many companies have changed the way employees work. Instead of renting large office buildings, some organizations now prefer flexible workspaces, where employees can choose different locations depending on the task they are completing. These workplaces often include quiet rooms for concentration, open areas for teamwork, and small meeting spaces for private discussions.

Supporters argue that this approach improves productivity because employees can select an environment that matches their needs. For example, a designer creating a new project may prefer a silent room, while a marketing team planning an advertising campaign might work more effectively in an open collaborative space.

However, not everyone agrees. Some employees report that constantly changing work locations makes it difficult to build routines. Others believe that noise from nearby conversations can reduce concentration, even in offices designed to encourage collaboration. A recent workplace survey found that although 68% of employees appreciated having more choices, only 42% believed the new system helped them accomplish tasks faster than before.

Companies also claim flexible offices reduce operating costs because fewer permanent desks are required. This can lower rent and utility expenses, especially when employees work remotely several days each week. Nevertheless, critics point out that businesses often underestimate the cost of redesigning offices and purchasing mobile technology such as laptops, wireless monitors, and reservation software.

Experts generally agree that flexible workspaces are most successful when organizations clearly explain how employees should use them. Without clear expectations, workers may become frustrated by the constant need to search for available desks or meeting rooms. In other words, the success of a flexible office depends less on the furniture itself than on thoughtful planning and effective communication.`,
  questions: [
    {
      q: "According to the passage, why do supporters believe flexible workspaces improve productivity?",
      options: [
        "Employees spend less time commuting.",
        "Workers can choose an environment that matches their task.",
        "Everyone has a permanent desk.",
        "Companies provide free technology."
      ],
      correct: 1
    },
    {
      q: "What do the survey results mainly suggest?",
      options: [
        "Most employees dislike flexible workspaces.",
        "Employees appreciate having choices more than they believe those choices increase efficiency.",
        "Flexible workspaces always improve productivity.",
        "Employees prefer traditional offices in every situation."
      ],
      correct: 1
    },
    {
      q: "Which statement is NOT supported by the passage?",
      options: [
        "Flexible offices can reduce rent expenses.",
        "Changing work locations can make routines difficult.",
        "Flexible workspaces completely eliminate distractions.",
        "Office redesigns may cost more than expected."
      ],
      correct: 2
    },
    {
      q: "Why does the author mention laptops, wireless monitors, and reservation software?",
      options: [
        "To recommend useful office equipment.",
        "To show examples of unexpected business expenses.",
        "To explain why employees work faster.",
        "To compare old and new technology."
      ],
      correct: 1
    },
    {
      q: "What is the author's main conclusion?",
      options: [
        "Flexible workspaces succeed mainly because of modern furniture.",
        "Flexible workspaces are effective only when managed and communicated well.",
        "Traditional offices should disappear completely.",
        "Employees should always work remotely."
      ],
      correct: 1
    }
  ]
},
 {
  id: "t2",
  title: "The City's New Library Policy",
  body: `For many years, the downtown public library was known as one of the quietest places in the city. Students often spent entire afternoons preparing for exams, while researchers appreciated the peaceful environment. However, as the number of visitors increased, library staff noticed that people's expectations had begun to change.

Instead of using the library only to borrow books, many visitors wanted spaces where they could work together on school assignments, attend workshops, or participate in community events. In response, the library introduced a new layout. The first floor became a collaborative zone where conversation was allowed, while the upper floors remained designated for silent study.

Although the change was welcomed by many residents, it also received criticism. Some regular visitors argued that the library had lost its traditional atmosphere. Others complained that sounds from the collaborative area occasionally reached the quiet floors despite additional soundproofing. Nevertheless, library administrators reported that attendance increased by nearly 30% during the first year after the renovation.

To address ongoing concerns, the library introduced several additional measures. Visitors can now reserve silent study rooms in advance, and staff members regularly monitor noise levels throughout the building. The administration also encourages visitors to provide feedback through monthly surveys so future improvements can be based on community needs rather than assumptions.

Experts in public space management suggest that libraries are evolving because communities now expect them to serve multiple purposes. According to these experts, a successful modern library is not simply one that stores books but one that balances learning, collaboration, and accessibility. Achieving that balance, however, requires continuous adjustments instead of relying on a single solution.`,
  questions: [
    {
      q: "The word 'designated' in the third sentence of the second paragraph is closest in meaning to:",
      options: [
        "Decorated",
        "Reserved for a particular purpose",
        "Frequently visited",
        "Recently constructed"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the library administrators?",
      options: [
        "They ignored complaints from regular visitors.",
        "They believed the renovation was perfect.",
        "They were willing to adjust the library based on feedback.",
        "They wanted to eliminate quiet study areas."
      ],
      correct: 2
    },
    {
      q: "In the final paragraph, what does the word 'that balance' refer to?",
      options: [
        "Storing more books than before",
        "Balancing learning, collaboration, and accessibility",
        "Reducing the number of visitors",
        "Separating students from researchers"
      ],
      correct: 1
    },
    {
      q: "Which statement is supported by the passage?",
      options: [
        "Attendance decreased after the renovation.",
        "Every visitor approved of the new layout.",
        "Some noise from collaborative areas could still be heard upstairs.",
        "The library removed all silent study spaces."
      ],
      correct: 2
    },
    {
      q: "What is the author's main purpose in writing this passage?",
      options: [
        "To criticize modern libraries for becoming too noisy.",
        "To explain how one library adapted to changing community needs while facing both benefits and challenges.",
        "To encourage people to borrow more books.",
        "To compare libraries in different cities."
      ],
      correct: 1
    }
  ]
},
  {
  id: "t3",
  title: "The Unexpected Effect of Customer Reviews",
  body: `When shopping online, many consumers assume that products with the highest ratings are automatically the best choice. As a result, some buyers spend very little time reading individual reviews and instead focus almost entirely on the average score displayed beside a product. Researchers, however, have found that this strategy can sometimes lead to disappointing purchases.

In a recent study, participants were asked to choose between several products with similar prices but different review patterns. One product had an average rating of 4.9 stars based on only twelve reviews. Another received 4.6 stars but had been reviewed by more than two thousand customers. Surprisingly, many participants selected the first product despite the much smaller sample size. Later analysis suggested that people often overestimated the reliability of extremely high ratings while underestimating the value of large amounts of consistent feedback.

The researchers also discovered that negative reviews were not always harmful. In fact, products with a small number of thoughtful criticisms were frequently considered more trustworthy than products with nothing but praise. According to the report, buyers tended to suspect that a perfect review history might not accurately represent real customer experiences. Consequently, a few well-explained complaints sometimes increased rather than decreased consumer confidence.

Although businesses often encourage satisfied customers to leave positive reviews, experts caution against attempting to remove every negative comment. Instead, they recommend responding professionally to criticism and explaining how problems have been addressed. Such responses not only demonstrate accountability but also provide future customers with additional information that numerical ratings alone cannot communicate.

Ultimately, the researchers concluded that informed shoppers evaluate both the quantity and quality of reviews instead of relying on a single number. Ironically, the highest-rated product is not always the one consumers trust the most once they examine the evidence more carefully.`,
  questions: [
    {
      q: "The word 'Consequently' in the third paragraph is closest in meaning to:",
      options: [
        "For example",
        "As a result",
        "At first",
        "In contrast"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the participants in the study?",
      options: [
        "Most carefully read every review before making a decision.",
        "Many assumed that an extremely high rating automatically meant greater reliability.",
        "They preferred cheaper products regardless of ratings.",
        "They distrusted all online reviews."
      ],
      correct: 1
    },
    {
      q: "In the fourth paragraph, what does the word 'Such responses' refer to?",
      options: [
        "Removing negative comments from websites.",
        "Leaving only positive reviews.",
        "Responding professionally to criticism and explaining solutions.",
        "Giving products higher ratings."
      ],
      correct: 2
    },
    {
      q: "Which statement is NOT supported by the passage?",
      options: [
        "A perfect review history may appear suspicious to some buyers.",
        "Large numbers of reviews can provide valuable information.",
        "Negative reviews always reduce customer confidence.",
        "Researchers recommend looking beyond the average rating."
      ],
      correct: 2
    },
    {
      q: "Which statement best expresses the author's main message?",
      options: [
        "Consumers should purchase only products with the highest ratings.",
        "The number beside a product is often more important than the reviews themselves.",
        "Making a good purchasing decision requires evaluating evidence beyond the average score.",
        "Businesses should delete negative reviews whenever possible."
      ],
      correct: 2
    }
  ]
},
{
  id: "t4",
  title: "Why Waiting Can Improve Decisions",
  body: `People often believe that making decisions quickly is a sign of confidence and competence. In fast-moving workplaces, employees who respond immediately are frequently viewed as decisive leaders, while those who hesitate may be perceived as uncertain. However, psychologists argue that this assumption can be misleading.

In one experiment, participants were asked to solve a series of business problems. Half of them were required to submit an answer within thirty seconds, whereas the remaining participants were instructed to spend at least three minutes considering the available information before making a decision. Although the second group completed fewer tasks, they consistently made more accurate judgments, particularly when the problems contained information that appeared relevant but was actually intended to distract them.

Researchers believe that rapid decisions rely heavily on mental shortcuts, known as heuristics. These shortcuts are useful because they reduce the effort required to process information. Nevertheless, they can also cause people to ignore evidence that contradicts their initial impressions. Once an individual forms an early opinion, there is a natural tendency to search for information that confirms it rather than information that challenges it.

Interestingly, delaying a decision does not always produce better results. The researchers observed that excessive analysis occasionally led participants to become less confident, even when they had already identified the correct solution. In these cases, additional thinking introduced unnecessary doubt instead of improving accuracy. Consequently, the relationship between decision time and decision quality proved to be more complex than the researchers had originally expected.

The researchers concluded that effective decision-makers are not simply those who think the fastest or the longest. Rather, they recognize when a situation requires immediate action and when it is worthwhile to pause, reconsider the evidence, and question their own assumptions. According to the report, this ability distinguishes experienced professionals from individuals who merely appear confident.`,
  questions: [
    {
      q: "The word 'heuristics' in the third paragraph is closest in meaning to:",
      options: [
        "Scientific experiments",
        "Mental shortcuts used to make decisions",
        "Business strategies",
        "Research errors"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the business problems used in the experiment?",
      options: [
        "They were designed so that answering quickly was always the best strategy.",
        "Some included misleading information that could influence participants.",
        "Only experienced managers were able to solve them.",
        "Every participant received different questions."
      ],
      correct: 1
    },
    {
      q: "In the third paragraph, what does the word 'they' refer to in the sentence 'Nevertheless, they can also cause people to ignore evidence...?'",
      options: [
        "Researchers",
        "Participants",
        "Mental shortcuts (heuristics)",
        "Business problems"
      ],
      correct: 2
    },
    {
      q: "Which statement is NOT supported by the passage?",
      options: [
        "Spending more time on a decision always leads to better outcomes.",
        "People often seek information that supports their first impression.",
        "Quick decisions can be influenced by mental shortcuts.",
        "Too much analysis can reduce confidence."
      ],
      correct: 0
    },
    {
      q: "Which statement best summarizes the author's main idea?",
      options: [
        "Fast decisions are always superior in professional environments.",
        "Successful decision-making depends on choosing the appropriate amount of reflection for each situation.",
        "Employees should avoid making decisions under time pressure.",
        "Confidence is the most important quality of an effective leader."
      ],
      correct: 1
    }
  ]
},
];

/* =========================================================
   "NO IMMEDIATE REPEAT" LOGIC

   For each text we keep our own queue of indices into its 5
   questions, shuffled randomly. Every time a question for
   that text is needed, we take the next item from its queue.
   Once the queue runs out (all 5 shown), it's reshuffled, but
   with one rule: the first question of the new queue can't be
   the same as the last question of the previous queue.

   The same idea is used for the ORDER of the texts: instead
   of always starting at text 1, we shuffle the order of all
   texts into a queue and pull from it round after round, with
   the same no-repeat-at-the-boundary rule.

   As a result:
   - A given text's question never repeats until the other 4
     have all been shown.
   - The same question never appears twice in a row, even
     across a reshuffle boundary.
   - The order the texts appear in is randomized every round,
     and never repeats the same text back-to-back.
   ========================================================= */

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

class TextQuestionPool {
  constructor(text) {
    this.text = text;
    this.lastIndex = null;
    this.queue = makeQueue(text.questions.length);
    this.recentlyUsed = []; // used to render the "memory ring"
  }

  next() {
    if (this.queue.length === 0) {
      this.queue = makeQueue(this.text.questions.length, this.lastIndex);
    }
    const idx = this.queue.shift();
    this.lastIndex = idx;
    this.recentlyUsed.push(idx);
    if (this.recentlyUsed.length > this.text.questions.length) {
      this.recentlyUsed.shift();
    }
    return idx;
  }
}

// Randomizes which text comes next, round after round, without
// repeating the same text twice in a row at a reshuffle boundary.
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
   ========================================================= */

// One pass of the quiz = one question from each text (not all 5).
const TOTAL_QUESTIONS = TEXTS.length;

let pools = TEXTS.map((t) => new TextQuestionPool(t));
let textOrder = new TextOrder(TEXTS.length);
let currentTextIdx = 0;
let currentQuestionIdx = null;
let answered = false;
let answeredCount = 0;
let correctCount = 0;

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

function renderMemoryRing(pool) {
  els.memoryRing.innerHTML = "";
  for (let i = 0; i < pool.text.questions.length; i++) {
    const dot = document.createElement("span");
    dot.className = "memory-ring__dot";
    if (pool.recentlyUsed.includes(i)) dot.classList.add("used");
    if (i === pool.lastIndex) dot.classList.add("current");
    els.memoryRing.appendChild(dot);
  }
}

function showTextAndQuestion() {
  currentTextIdx = textOrder.next();
  const text = TEXTS[currentTextIdx];
  const pool = pools[currentTextIdx];

  els.progressCounter.textContent = `${answeredCount + 1} / ${TOTAL_QUESTIONS}`;
  els.textTitle.textContent = text.title;
  renderParagraphs(els.textBody, text.body);

  currentQuestionIdx = pool.next();
  const question = text.questions[currentQuestionIdx];

  renderMemoryRing(pool);

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
    btn.classList.add("correct");
    els.feedback.textContent = "Correct!";
    els.feedback.classList.add("ok");
  } else {
    btn.classList.add("wrong");
    buttons[question.correct].classList.add("correct");
    els.feedback.textContent = "Incorrect.";
    els.feedback.classList.add("err");
  }

  els.nextBtn.disabled = false;
  if (answeredCount >= TOTAL_QUESTIONS) {
    els.nextBtn.textContent = "Show Result →";
  }
}

/* =========================================================
   GRADE ON A 12-POINT SCALE
   grade = (correct / total) * 12, rounded, clamped to 1-12
   ========================================================= */
function computeGrade() {
  const raw = (correctCount / TOTAL_QUESTIONS) * 12;
  return Math.min(12, Math.max(1, Math.round(raw)));
}

function showResult() {
  els.quizContent.classList.add("hidden");
  els.resultScreen.classList.remove("hidden");
  els.resultGrade.textContent = computeGrade();
  els.resultDetails.textContent =
    `Correct answers: ${correctCount} of ${TOTAL_QUESTIONS}`;
}

function restart() {
  // Pools and text order are NOT reset here on purpose — they keep
  // shuffling continuously across rounds, so the no-repeat guarantee
  // (both for questions and for text order) holds across restarts too.
  answeredCount = 0;
  correctCount = 0;
  els.nextBtn.textContent = "Next →";
  els.resultScreen.classList.add("hidden");
  els.quizContent.classList.remove("hidden");
  showTextAndQuestion();
}

els.nextBtn.addEventListener("click", () => {
  if (answeredCount >= TOTAL_QUESTIONS) {
    showResult();
    return;
  }
  showTextAndQuestion();
});

els.restartBtn.addEventListener("click", restart);

showTextAndQuestion();
