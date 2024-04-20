//Arrray containing questions and answers
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

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next question";
    showQuestion();
}

// Function to display the current question
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
    });
}

// Function to reset the answer buttons and hide the next button
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle the selection of an answer
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

// Function to show the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try again";
    nextButton.style.display = "block";
}

// Function to handle the next button click
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

// Function to load the contact page content
function loadContactPage() {
    document.getElementById('content').innerHTML = `
        <section class="contact" id="contact">
        <h2>Contact</h2>
            <div class="contact-content">
                <div class="social-media">
                    
                    <p><b>Feel free to reach out with any questions, feedback, or collaboration ideas!</b></p>
                    <h3 class="contact-heading">Email:</h3>
                    <p>ojaskittur@gmail.com</p>
                    <h3 class="contact-heading">Phone:</h3>
                    <p>+91 7395820796</p>
                    <h3 class="contact-heading">Address:</h3>
                    <p>No-306, Rajeshwari Towers <br>VIT university,Vellore-632014 <br>Tamil Nadu, India</p>
                </div>
                <div class="contact-form">
                    <form id="contactForm"
                        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfKZCpYYeslfHpc7UGrvzJr_c2VsKd1ZY8_l15JgxRSZaEzdQ/formResponse"
                        method="POST">
                        <input type="text" id="name" placeholder="Your Name" name="entry.430170869" required>
                        <input type="email" id="email" placeholder="Your Email" name="entry.26687782" required>
                        <input type="text" id="subject" placeholder="Subject" name="entry.476277779" required>
                        <textarea id="message" placeholder="Your Message" name="entry.1931836219" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    <div id="formMessage"></div>
                </div>
            </div>
        </section>
    `;
}

// Function to load the about page content
function loadAboutPage() {
    document.getElementById('content').innerHTML = `
    <section class="about" id="about">
    <div class="about-content">
        <h2>About Us</h2>
        <p>Hey there! Welcome to NPTEL Practice, your friendly study buddy for NPTEL exams!</p>
        <p>I am a passionate learner just like you, on a mission to make your NPTEL prep journey as smooth as possible.</p>
        <p>Here at NPTEL Practice, I know that studying for exams can be daunting, so we've crafted a cozy corner of the internet filled with practice quizzes and all the support you need to crush those NPTEL exams!</p>
        <p>Think of this website as your study pal who has got your back every step of the way. Together, let's tackle those tough topics, overcome challenges, and celebrate your successes!</p>
        <p>I will be adding more courses and quizzes soon :)</p>
    </div>
</section>

    `;
}
