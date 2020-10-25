var startBtnEl = document.getElementById("start");
var submitBtnEl = document.getElementById("submit");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");

var questionsLength = arrQuestions.length;
var questionIndex = 0;
var user_score;
var user_initials;
var score_log = [];

startBtnEl.addEventListener("click", runQuiz);
submitBtnEl.addEventListener("click", submitQuiz);

function runQuiz() {
    // initialize and start timer
    // initialize score
    // randomize order of questions
    // hide start-screen show questions-screen
    document.getElementById("start-screen").className = "hide";
    document.getElementById("questions-screen").className = "show";
    for (var i = 0; i < questionsLength; i++) {
        console.log("showQuestion index : " + i + " is " + arrQuestions[i].question);
        showQuestion(i);
        // showQuestion();
    }
    // call showQuestions
    // call endQuiz
}

function showQuestion(i) {
    answerEl.innerHTML = "";
    var button = [];
    var activeQuestion = arrQuestions[i];
    console.log(activeQuestion.question);
    questionEl.textContent = activeQuestion.question;
    var answersLength = activeQuestion.arrAnswers.length;
    console.log(answersLength);
    for (var j = 0; j < answersLength; j++) {
        console.log("showAnswer index : " + j + " is " + activeQuestion.arrAnswers[j]);
        button[j] = document.createElement('button');
        var text = document.createTextNode(activeQuestion.arrAnswers[j]);
        button[j].appendChild(text);
        if (j == activeQuestion.correctAnswer) {
            button[j].setAttribute("id","correct");
        } else {
            button[j].setAttribute("class","incorrect");
        }
        answerEl.appendChild(button[j]);
    }
    var correctEl = document.getElementById("correct");
    var incorrectEl = document.getElementsByClassName("incorrect");
    correctEl.addEventListener("click", addScore);
    console.log("incorrectEl.length is " + incorrectEl.length);
    for (var k = 0; k < incorrectEl.length; k++) {
        incorrectEl[k].addEventListener("click", subtractTime);
    }

    // questionEl.textContent = activeQuestion.question;
    // 
    // loop through questions in randomized order
        // validate response
        // if correct add 1 to score
        // else subtract 10 seconds from timer
    // end loop when no questions left or no time
    // 
}

function addScore() {
    console.log("Answered correctly");
}

function subtractTime() {
    console.log("Answered wrong");
}


function endQuiz() {
    // hide questions-screen
    // show end-screen
    // show score
    // enter initials
    // call submitQuiz if btn 
    // navigate to highscores.html
            // what if user clicks highscores before submitting
}

function submitQuiz() {
    // score_log.push([user_score, user_initials])
    // add score and initials to local storage array

}


function newQuiz() {
    // show start-screen
}

