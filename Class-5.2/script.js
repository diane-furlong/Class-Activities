var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var currentSeconds = workMinutesInput.value * 60;

var isPaused = false;


function calculateTime(seconds){
  var timeLeft = {
    minutes: seconds / 60,
    seconds: seconds % 60,
  }
  return timeLeft
}


// Write code to start the timer here
function startTimer() {
  if (!isPaused){
  currentSeconds = workMinutesInput.value * 60;
  }
  isPaused = false;
  interval = setInterval(function(){
    currentSeconds--;
    let timeLeft = calculateTime(currentSeconds);
    minutesDisplay.textContent = Math.floor(timeLeft.minutes);
    secondsDisplay.textContent = Math.floor(timeLeft.seconds);
  }, 1000)
}

function pauseTimer() {
 clearInterval(interval);
 isPaused = true;
}

function stopTimer(){
  clearInterval(interval);
 minutesDisplay.textContent = workMinutesInput.value;
 secondsDisplay.textContent = "00";
}



//event listener play time
playButton.addEventListener("click", startTimer);

//event listener pause time
pauseButton.addEventListener("click", pauseTimer);

//event listener stop time
stopButton.addEventListener("click", stopTimer);

