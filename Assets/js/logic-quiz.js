var startBtnEl = document.getElementById("start");
var submitBtnEl = document.getElementById("submit");
var questionEl = document.getElementById("question"); 
var answerEl = document.getElementById("answer");
var startScreenEl = document.getElementById("start-screen");
var questionsScreenEl = document.getElementById("questions-screen");
var endScreenEl = document.getElementById("end-screen");

var questionsLength = arrQuestions.length;
var questionIndex = 0;    // declare and initialize the questionIndex
var user_score = 0;       // declare and initialize the user score
var user_initials;        // declare user initials variable
var score_log = [];       // declare and initialize the score log

startBtnEl.addEventListener("click", startQuiz);    // when start button is clicked start a new quiz
submitBtnEl.addEventListener("click", submitQuiz);    // when submit button is clicked add entry to the score log

// FUNCTION : startQuiz
// This function initializes a new quiz by initializing
// new score and new timer


function startQuiz() {
  // update displayed divs
  startScreenEl.className = "hide";
  questionsScreenEl.className = "show";
  endScreenEl.className = "hide";
  // initialize variables
  user_score = 0;
  questionIndex = 0;
  startTimer();
  showQuestion();
}

function endQuiz() {
    document.getElementById("questions-screen").className = "hide";
    document.getElementById("end-screen").className = "show";
}

function addScore() {
    user_score = user_score + 1;
    console.log("function:addScore, variable:user_score = " + user_score);
    questionIndex = questionIndex + 1;
    console.log("function:addScore, variable: questionIndex = " + questionIndex);
    console.log("Answered correctly");
}

function showQuestion() {
    console.log("001: showQuestion : questionIndex = " + questionIndex);
    answerEl.innerHTML = "";
    var button = [];
    var activeQuestion = arrQuestions[questionIndex];
    console.log("002: " + activeQuestion.question);
    questionEl.textContent = activeQuestion.question;
    var answersLength = activeQuestion.arrAnswers.length;
    console.log("003: " + answersLength);
    for (var j = 0; j < answersLength; j++) {
        console.log("showAnswer index : " + j + " is " + activeQuestion.arrAnswers[j]);
        button[j] = document.createElement('button');
        var text = document.createTextNode(activeQuestion.arrAnswers[j]);
        button[j].appendChild(text);
        console.log("004 : j = " + j + " activeQuestion.correctAnswer = " + activeQuestion.correctAnswer);
        if (j == activeQuestion.correctAnswer) {
            console.log("correct answer button");
            button[j].setAttribute("id","correct");
        } else {
            console.log("incorrect answer button");
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
}



function submitQuiz() {
    // score_log.push([user_score, user_initials])
    // add score and initials to local storage array
}

