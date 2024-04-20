const questions = [
    {
        question: "tropical moist forests do not include",
        answers: [
            { text: "broadleaved forests", correct: true },
            { text: "wet evergreen forests", correct: false },
            { text: "semi-evergreen forests", correct: false },
            { text: "moist deciduous forests", correct: false }
        ]
    },
    {
        question: "which of these is not a use value?",
        answers: [
            { text: "direct value", correct: false },
            { text: "indirect value", correct: false },
            { text: "option value", correct: false },
            { text: "existence value", correct: true }
        ]
    },
    {
        question: "the value derived from the knowledge of use of resources by others in the current generation is called ",
        answers: [
            { text: "altruistic value", correct: true },
            { text: "bequest value ", correct: false },
            { text: "existence value", correct: false },
            { text: "option value", correct: false }
        ]
    },
    {
        question: "montane sub-tropical forests do not involve",
        answers: [
            { text: "broadleaved forests", correct: false },
            { text: "pine forests", correct: false },
            { text: "semi-evergreen forests", correct: true },
            { text: "dry evergreen forests", correct: false }
        ]
    },
    {
        question: "pant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy is",
        answers: [
            { text: "silviculture definition of forests", correct: false },
            { text: "FAO definition of forests", correct: false },
            { text: "legal definition of forests", correct: false },
            { text: " ecological definition of forests", correct: true }
        ]
    },
    {
        question: "which of these is not a consumptive value?",
        answers: [
            { text: "timber", correct: false },
            { text: "firewood", correct: false },
            { text: "non-timber forest products", correct: false },
            { text: "education", correct: true }
        ]
    },
    {
        question: "the term 'forest' originates from",
        answers: [
            { text: "latin foris meaning outside", correct: true },
            { text: "greek foris meaning outside ", correct: false },
            { text: " latin foris meaning trees", correct: false },
            { text: "greek foris meaning trees", correct: false }
        ]
    },
    {
        question: "the value of leaving use and non-use values for offspring's or future generation is called",
        answers: [
            { text: "altruistic value", correct: false },
            { text: " bequest value", correct: true },
            { text: " existence value", correct: false },
            { text: "option value", correct: false }
        ]
    },
    {
        question: "which of these is not a forest type found in India?",
        answers: [
            { text: "mediterranean dry", correct: true },
            { text: "tropical dry", correct: false },
            { text: "montane temperate", correct: false },
            { text: "alpine", correct: false }
        ]
    },
    {
        question: "according to the supreme court, the term forest land includes",
        answers: [
            { text: "some area recorded as forest in the government record according to ownership", correct: false },
            { text: "any area recorded as forest in the government record according to ownership", correct: false },
            { text: "some area recorded as forest in the government record irrespective of ownership", correct: false },
            { text: "any area recorded as forest in the government record irrespective of ownership", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next question";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }
    );
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="try again";
    nextButton.style.display="block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();