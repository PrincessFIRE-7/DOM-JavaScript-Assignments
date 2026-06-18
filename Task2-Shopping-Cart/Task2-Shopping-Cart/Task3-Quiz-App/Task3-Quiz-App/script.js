const quizData = [
    { question: "Which DOM method selects the first element matching a selector?", options: ["getElementById", "querySelector", "querySelectorAll", "getElementsByClassName"], correct: 1 },
    { question: "What does JSON stand for?", options: ["Java Standard Object Notation", "JavaScript Object Notation", "JQuery Serialized Object Network", "JavaScript Optimized Node"], correct: 1 },
    { question: "Which regex flag handles case-insensitive matching?", options: ["/g", "/u", "/m", "/i"], correct: 3 },
    { question: "How do you call a parent class constructor in JS inheritance?", options: ["parent()", "this()", "super()", "extends()"], correct: 2 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-box");
const bodyElement = document.body;

function loadQuestion() {
    bodyElement.style.backgroundColor = "#f0f2f5"; // Reset background screen color
    if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
    }
    const currentQuiz = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuiz.question;
    optionsContainer.innerHTML = "";

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerText = option;
        button.onclick = () => handleAnswerSelection(index, currentQuiz.correct);
        optionsContainer.appendChild(button);
    });
}

function handleAnswerSelection(selectedIndex, correctIndex) {
    // Disable all options momentarily to prevent multiple clicking spam
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        score++;
        bodyElement.style.backgroundColor = "#28a745"; // Green background for correct
    } else {
        bodyElement.style.backgroundColor = "#dc3545"; // Red background for wrong
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000); // 1-second delay before moving along
}

function showResults() {
    let remark = "Keep practicing!";
    if (score === quizData.length) remark = "Perfect Score! Brilliant!";
    else if (score >= 2) remark = "Good job! Pass mark achieved.";

    document.getElementById("quiz-box").innerHTML = `
        <h3>Quiz Completed!</h3>
        <p id="score-display">Your Score: ${score} / ${quizData.length}</p>
        <p><strong>Remark:</strong> ${remark}</p>
    `;
}

loadQuestion();
