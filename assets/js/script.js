const questionsArr = [
    {
        lyric: "Now I'm lookin' to the sky to save me, lookin' for a sign of life",
        answers: [
            "Learn to Fly - Foo Fighters",
            "Many of Horror - Biffy Clyro",
            "High and Dry - Radiohead",
            "Thunder - BOYS LIKE GIRLS",
        ],
        correctAnswer: "Learn to Fly - Foo Fighters",

    },
    {
        
    }
];
// Initialises randomised array of questions
let randomisedQuestionsArr;
// Setting variables for the elements needed
const descriptionContainer = document.getElementById("description-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
const startBtn = document.getElementById("start-btn");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerBtns = document.getElementsByClassName("answer-btn");
const nextQuestionButton = document.getElementById("next-question-btn");
const playerScore = document.getElementById("player-score");
const resultsMessage = document.getElementById("results-message");
const playAgainBtn = document.getElementById("play-again-btn");

// Event Listeners

startBtn.addEventListener("click", startGame);

for (let i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", () => {
        chosenAnswer = answerBtns[i].textContent;
        nextBtnEnable();
    });
}

nextQuestionButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questionsArr.length){
        showQuestion(questionsArr[currentQuestion]);
    }
});

playAgainBtn.addEventListener("click", restartGame);

// Game Setup

gameContainer.classList.add("d-none");
resultsContainer.classList.add("d-none");
let currentQuestion = 0;
let currentQuestionNumber = 0;
let score = 0;
let totalQuestions = 10;
let chosenAnswer = "";

function startGame() {
    randomiseQuestions();
    descriptionContainer.classList.add("d-none");
    gameContainer.classList.remove("d-none");
    showQuestion(questionsArr[currentQuestion]);
}

function randomiseQuestions() {
    // When complete, change questionsArr to randomisedQuestionsArr
}

function showQuestion(selectedQuestion) {
    currentQuestionNumber++;
    questionNumber.textContent = currentQuestionNumber;
    questionText.textContent = selectedQuestion.lyric;
    for (let i = 0; i < selectedQuestion.answers.length; i++){
        answerBtns[i].textContent = selectedQuestion.answers[i];
        answerBtns[i].disabled = false;
    }
}

function checkAnswer() {

}

function nextBtnEnable() {

}

function showResults() {

}

function restartGame() {

}