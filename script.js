const questions = [
  {
    question: "1) Which color shirt was I wearing on our first base?",
    options: ["White", "Blue", "Light Blue", "Purple"],
    answer: "Light Blue"
  },
  {
    question: "2) When was the first time we said I love you?",
    options: ["15th Jan", "26th Jan", "1st Feb", "28th December"],
    answer: "15th Jan"
  },
  {
    question: "3) What’s my go to line when I hang with my boys?",
    options: [
      "I’m sleeping can I call you later",
      "I want to eat food",
      "I want to meet my friends",
      "Or I just hang up"
    ],
    answer: "I want to meet my friends"
  },
  {
    question: "4) If I disappeared for a day where would you find me?",
    options: [
      "Sleeping on my bed",
      "Clubbing",
      "Coimbatore",
      "With Rovel"
    ],
    answer: "Coimbatore"
  },
  {
    question: "5) If I won the lottery today what would I spend it on?",
    options: [
      "Clothes",
      "My girlfriend",
      "Investments",
      "Food"
    ],
    answer: "My girlfriend"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const finalSection = document.getElementById("final-section");
const quizBox = document.getElementById("quiz-box");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    feedbackEl.textContent = "Correct 💜";
    feedbackEl.style.color = "lightgreen";
    nextBtn.style.display = "inline-block";
  } else {
    feedbackEl.textContent = "Wrong answer 😢 Try again love";
    feedbackEl.style.color = "red";
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quizBox.style.display = "none";
    finalSection.style.display = "block";
  }
};

function checkFinal() {
  const f1 = document.getElementById("f1").value.trim().toUpperCase();
  const f2 = document.getElementById("f2").value.trim();
  const f3 = document.getElementById("f3").
