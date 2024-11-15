const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

// variables for buttons
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

// variable for laplist
const lapList = document.getElementById('laplist');

/// stopwatch variables

// the variables here will be updated many times
//  -> when the value is being updated many times, we should use "let"
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click',startTimer);
// m3neta bas n3ml "click" bt3ml call lal function "startTimer"
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);


function startTimer(){

    interval =  setInterval(updateTimer,10);
    startButton.disabled = true;

}

function stopTimer(){

    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;
}

function pauseTimer(){
    clearInterval(interval);// to pause the timer
    startButton.disabled = false;
}

function resetTimer(){
    clearInterval(interval); // to pause it first
    resetTimerData(); // to reset it by displaying all zeros
    startButton.disabled = false; // once we click the reset button, we want to make the startButton active again

}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){  //// 1000  -> 1 seconds = 1000 millseconds
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer(){
    /// to update the text content of milliseconds value
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);    
}

///to display 00 instead of 0, we want to display the time is a formatted way
function padTime(time){
    return time.toString().padStart(2,'0');
    /// 2 means 2 digit value (value length)
    /// '0' means that we want to pad it with the particular string '0'
    /////means: we want to append this particular zero whenever there is a particular string

}

function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
}