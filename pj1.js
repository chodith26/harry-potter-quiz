const themeBtn = document.getElementById("theme");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let currentIndex = 0;
let showingAnswer = false;

const questions = [
    {
        q: "<b>Author of </b><i>Harry Potter</i> ?",
        a: "<i>J.K. Rowling</i>"
    },
    {
        q: "<b>Master of Death in </b><i>Harry Potter</i> <b>Series ?</b>",
        a: "<i>Harry Potter</i>"
    },
    {
        q: "<b>Who are referred as </b><i>Golden Trio</i><b> ?</b>",
        a: "<i>Harry Potter, Hermione Granger, Ron Weasley</i>"
    }
];

// Show current question
function renderQuestion() {
    showingAnswer = false;
    questionText.innerHTML = questions[currentIndex].q;
    answerBtn.innerText = "Click to know answer";

    // Smooth transition
    questionContainer.style.opacity = 0;
    questionContainer.style.transform = "translateY(20px)";
    setTimeout(() => {
        questionContainer.style.opacity = 1;
        questionContainer.style.transform = "translateY(0)";
    }, 200);

    // Arrow states
    leftArrow.classList.toggle("disabled", currentIndex === 0);
    rightArrow.classList.toggle("disabled", currentIndex === questions.length - 1);
}

// Toggle answer
answerBtn.addEventListener("click", () => {
    if (!showingAnswer) {
        questionText.innerHTML = questions[currentIndex].a;
        answerBtn.innerText = "Back to Question";
    } else {
        questionText.innerHTML = questions[currentIndex].q;
        answerBtn.innerText = "Click to know answer";
    }
    showingAnswer = !showingAnswer;
});

// Arrow navigation
leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
});

rightArrow.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
    }
});

// Theme toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});