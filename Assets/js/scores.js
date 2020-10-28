var goBackBtnEl = document.getElementById("goback");
var clearBtnEl = document.getElementById("clear");

var scores = [];


goBackBtnEl.addEventListener("click", newQuiz); 
 // maybe just address reference to go back to index?
clearBtnEl.addEventListener("click", clearScores);


function clearScores() {
    // clear local storage scores and redisplay page
}

