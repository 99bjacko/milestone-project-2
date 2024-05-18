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
];

let randomisedQuestionsArr;
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
const homeBtn = document.getElementById("home-btn");

startBtn.addEventListener("click", startGame);


function startGame() {

}

function randomiseQuestions() {

}

function checkAnswer() {

}

function showResults() {

}

function restartGame() {

}