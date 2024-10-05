const data = [
  {
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who painted the famous Mona Lisa?",
    choices: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the 2 + 5?",
    choices: ["5", "44", "7"],
    answer: "7",
  },
  {
    question: "Which animal is the largest land mammal?",
    choices: ["Elephant", "Giraffe", "Hippopotamus"],
    answer: "Elephant",
  },
  {
    question: "In which year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    choices: ["William Shakespeare", "Jane Austen", "Charles Dickens"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical formula for water?",
    choices: ["H2O", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Which country has the strongest Military in the world?",
    choices: ["Brazil", "USA", "Egypt"],
    answer: "USA",
  },
  {
    question: "What is the fastest animal in the world?",
    choices: ["Cheetah", "Turtle", "Snail"],
    answer: "Cheetah",
  },
  {
    question: "Which country has the most number of pyramids?",
    choices: ["Egypt", "Sudan", "Kenya"],
    answer: "Sudan",
  },
  {
    question: "Which of these is an Operating System",
    choices: ["Windows", "Chair", "CandyOS"],
    answer: "Windows",
  },
  {
    question: "Where is Eiffel Tower located?",
    choices: ["UK", "France", "Germany"],
    answer: "France",
  },
  {
    question: "Where was Pasta invented?",
    choices: ["Italy", "France", "Egypt"],
    answer: "Italy",
  },
  {
    question: "Which country has the largest human population?",
    choices: ["India", "Egypt", "China"],
    answer: "India",
  },
  {
    question: "Which is considered a FAANG?",
    choices: ["IBM", "Meta", "CrowdStrike"],
    answer: "Meta",
  },
];

const quizContainer = document.querySelector("#quizContainer");
const quizQA = [];
function generateQuiz() {
  for (let i = 0; i < 6; ++i) {
    const dataItem = data[Math.floor(Math.random() * data.length)];
    quizQA.push(dataItem);
    const QA = document.createElement("div");
    QA.innerHTML = `
    <h3>${dataItem.question}</h3>
    ${dataItem.choices
      .map((choice) => {
        return `<input type="radio" name="q${i}" value="${choice}"> ${choice}</li>`;
      })
      .join("")}
    `;

    quizContainer.appendChild(QA);
  }
}

const submitButton = document.querySelector("#submitButton");
let score = 0;

submitButton.addEventListener("click", () => {
  const radios = document.querySelectorAll("input[type=radio]");

  for (let i = 0; i < radios.length; ++i) {
    if (
      radios[i].checked &&
      radios[i].value == quizQA[Math.floor(i / 3)].answer
    ) {
      ++score;
    }
  }

  const result = document.querySelector("#result");

  const percentage = (score / 6) * 100;

  if (score > 3) {
    result.setAttribute("class", "success");
    result.textContent = `Congrats! You scored ${percentage.toFixed(2)}%`;
  } else {
    result.setAttribute("class", "failure");
    result.textContent = `Sorry! You scored ${percentage.toFixed(2)}%`;
  }
});

generateQuiz();
