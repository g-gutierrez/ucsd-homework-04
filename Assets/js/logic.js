var startBtnEl = document.getElementById("start");
var submitBtnEl = document.getElementById("submit");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");

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
    for (const )
    Array.forEach(testQuestions => showQuestion());
    // call showQuestions
    // call endQuiz
}

function showQuestion() {
    questionEl.textContent = item.question;
    var answersArray = item.answers;
    Array.forEach(answersArray => showAnswers());
    // 
    // loop through questions in randomized order
        // validate response
        // if correct add 1 to score
        // else subtract 10 seconds from timer
    // end loop when no questions left or no time
    // 
}

function showAnswers() {
    var button = document.createElement('button');
    var text = document.createTextNode(item.answers);
    button.appendChild(text);
    answerEl.appendChild(button);
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

