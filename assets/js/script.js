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
        lyric: "Don't cry to me because the fiction that we're living in says I should pull the pin",
        answers: [
            "Denier - Biffy Clyro",
            "Aliens Exist - blink-182",
            "Centuries - Fall Out Boy",
            "Animals - Architects",
        ],
        correctAnswer: "Animals - Architects",
    },
    {
        lyric: "He doensn't look a thing like Jesus but he talks like a gentleman",
        answers: [
            "Use Somebody - Kings of Leon",
            "What I've Done - Linkin Park",
            "When You Were Young - The Killers",
            "Love Never Felt So Good - Michael Jackson, Justin Timberlake"
        ],
        correctAnswer: "When You Were Young - The Killers",
    },
    {
        lyric: "But I crumble completely when you cry, it seems like once again you've had to greet me with goodbye",
        answers: [
            "Sparks - Coldplay",
            "goodbye - Billie Eilish",
            "505 - Arctic Monkeys",
            "Better Off Alone - Alice Deejay"
        ],
        correctAnswer: "505 - Arctic Monkeys",
    },
    {
        lyric: "You're asking me, will my love grow? I don't know, I don't know",
        answers: [
            "Something - The Beatles",
            "You've Got The Love - Florence + The Machine",
            "Chiquitita - ABBA",
            "Sorry - Nothing But Thieves",
        ],
        correctAnswer: "Something - The Beatles",
    },
    {
        lyric: "You say 'I love you, boy', I know you lie",
        answers: [
            "Real Love Song - Nothing But Thieves",
            "Hey Brother - Avicii",
            "Many of Horror - Biffy Clyro",
            "Bad Habits - Ed Sheeran",
        ],
        correctAnswer: "Many of Horror - Biffy Clyro",
    },
    {
        lyric: "Why aren't you scared of me? Why do you care for me? When we all fall asleep, where do we go?",
        answers: [
            "bury a friend - Billie Eilish",
            "Free - Florence + The Machine",
            "The Wheel - IDLES",
            "you should see me in a crown - Billie Eilish",
        ],
        correctAnswer: "bury a friend - Billie Eilish"
    },
    {
        lyric: "Can you hear the silence? Can you see the dark?",
        answers: [
            "The Teacher - Foo Fighters",
            "Can You Feel My Heart - Bring Me The Horizon",
            "Apocalypse - Cigarettes After Sex",
            "Entombed - Deftones",
        ],
        correctAnswer: "Can You Feel My Heart - Bring Me The Horizon",
    },
    {
        lyric: "The lights go out, and I can't be saved. Tides that I tried to swim against...",
        answers: [
            "Adventure of a Lifetime - Coldplay",
            "Charlie Brown - Coldplay",
            "Clocks - Coldplay",
            "The Scientist - Coldplay",
        ],
        correctAnswer: "Clocks - Coldplay",
    },
    {
        lyric: "Placed inside. Safe and sound. Shapes and colours are all I see",
        answers: [
            "Jigsaw Falling Into Place - Radiohead",
            "Colour Me In - VUKOVI",
            "Apocalypse - Cigarettes After Sex",
            "Entombed - Deftones",
        ],
        correctAnswer: "Entombed - Deftones",
    },
    {
        lyric: "Sun is shining in the sky, there ain't a cloud in sight. It's stopped raining, everybody's in a play...",
        answers: [
            "Mr Blue Sky - Electric Light Orchestra",
            "Watermelon Sugar - Harry Styles",
            "Summer - Calvin Harris",
            "Starlight - Muse"
        ],
        correctAnswer: "Mr Blue Sky - Electric Light Orchestra",
    },
    {
        lyric: "Blue jean baby, L.A. lady, seamstress for the band",
        answers: [
            "BLUE - Billie Eilish",
            "Tiny Dancer - Elton John",
            "Delicious Things - Wolf Alice",
            "Waterloo - ABBA",
        ],
        correctAnswer: "Tiny Dancer - Elton John"
    },
    {
        lyric: "Oh, thunder only happens when it's rainin'. Players only love you when they're playing",
        answers: [
            "Thunder - BOYS LIKE GIRLS",
            "Anyone Can Play Guitar - Radiohead",
            "Mercy - Muse",
            "Dreams - Fleetwood Mac",
        ],
        correctAnswer: "Dreams - Fleetwood Mac",
    },
    {
        lyric: "Do you have the time to listen to me whine about nothin' and everything all at once?",
        answers: [
            "Basket Case - Green Day",
            "Time is Running Out - Muse",
            "Trouble's Coming - Royal Blood",
            "Everlong - Foo Fighters",
        ],
        correctAnswer: "Basket Case - Green Day",
    },
    {
        lyric: "Oh, simple thing, where have you gone? I'm getting old and I need something to rely on",
        answers: [
            "Human - The Killers",
            "Somewhere Only We Know - Keane",
            "Guiding Light - Muse",
            "Patience - Take That",
        ],
        correctAnswer: "Somewhere Only We Know - Keane",
    },
    {
        lyric: "They will not force us. They will stop degrading us. They will not control us. And we will be victorious.",
        answers: [
            "Freedom - Rage Against The Machine",
            "Uprising - Muse",
            "Victory Over the Sun - Biffy Clyro",
            "Dream On - Aerosmith",
        ],
        correctAnswer: "Uprising - Muse",
    },
    {
        lyric: "When I was a young boy, my father took me into the city to see a marching band",
        answers: [
            "when we were young - Architects",
            "When The Sun Goes Down - Arctic Monkeys",
            "City Haunts - Nothing But Thieves",
            "Welcome to the Black Parade - My Chemical Romance",
        ],
        correctAnswer: "Welcome to the Black Parade - My Chemical Romance",
    },
    {
        lyric: "So I hit my head up against the wall over and over and over and over again, and again",
        answers: [
            "All My Life - Foo Fighters",
            "Animals - Architects",
            "Amsterdam - Nothing But Thieves",
            "Airbag - Radiohead",
        ],
        correctAnswer: "Amsterdam - Nothing But Thieves",
    },
    {
        lyric: "A heart that's full up like a landfill, a job that slowly kills you, bruises that won't heal",
        answers: [
            "Shiner In The Dark - Royal Blood",
            "No Surprises - Radiohead",
            "Easily - Muse",
            "The Scientist - Coldplay",
        ],
        correctAnswer: "No Surprises - Radiohead",
    },
    {
        lyric: "Nothing here to see, just a kid like me, tryin' to cut some teeth, tryin' to figure it out",
        answers: [
            "Amsterdam - Nothing But Thieves",
            "Uprising - Muse",
            "57 - Biffy Clyro",
            "Figure It Out - Royal Blood",
        ],
        correctAnswer: "Figure It Out - Royal Blood",
    },
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
        answerBtns[i].classList.add("chosen");
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
        answerBtns[i].classList.remove("chosen");
        answerBtns[i].disabled = false;
    }
}

function checkAnswer() {
    let correctAnswer = questionsArr[currentQuestion].correctAnswer;
    if (chosenAnswer === correctAnswer){
        score++;
    }
    if (currentQuestionNumber === totalQuestions){
        showResults();
    }
    nextQuestionButton.disabled = true;
}

function nextBtnEnable() {
    nextQuestionButton.disabled = false;
    for (let i = 0; i < answerBtns.length; i++){
        answerBtns[i].disabled = true;
    }
}

function showResults() {
    gameContainer.classList.add("d-none");
    resultsContainer.classList.remove("d-none");
    if (score === 10) {
        resultsMessage.textContent = "You smashed it, I'm almost suspicious!";
        playerScore.textContent = `You scored ${score} out of 10`;
    } else if (score >= 8) {
        resultsMessage.textContent = "Not bad at all! A few more attempts and you'll get 100%";
        playerScore.textContent = `You scored ${score} out of 10`;
    } else if (score >= 5) {
        resultsMessage.textContent = "You could work on your music knowledge, but it certainly could be worse";
        playerScore.textContent = `You scored ${score} out of 10`;
    } else if (score >= 2) {
        resultsMessage.textContent = "You need to spend a day or two on Spotify I think!";
        playerScore.textContent = `You scored ${score} out of 10`;
    } else if (score < 2) {
        resultsMessage.textContent = "Do you even listen to music?";
        playerScore.textContent = `You scored ${score} out of 10`;
    }
}

function restartGame() {

}