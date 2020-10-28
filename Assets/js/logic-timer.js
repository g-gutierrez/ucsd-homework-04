var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var interval;
var totalSeconds = 0;
var secondsElapsed = 0;


function startTimer() {
  clearInterval(interval);
  totalSeconds = arrQuestions.length * 30; // give 30 seconds for each question
  if (totalSeconds > 0) {
    interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
    }, 1000);
  } else {
    stopTimer();
    endQuiz();
  }
}

function stopTimer() {
  secondsElapsed = 0;
  renderTime();
}

function subtractTime() {
  secondsElapsed = secondsElapsed + 10;
  console.log("function:subtractTime, variable:secondsElapsed = " + secondsElapsed);
}

function renderTime() {
  // When renderTime is called it sets the textContent for the timer html...
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
  if (secondsElapsed >= totalSeconds) {
    endQuiz();
  }
}

// These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
    //
    var secondsLeft = totalSeconds - secondsElapsed;
  
    var minutesLeft = Math.floor(secondsLeft / 60);
  
    var formattedMinutes;
  
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
  
    return formattedMinutes;
  }
  
  function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
  
    return formattedSeconds;
  }




