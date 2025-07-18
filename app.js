const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 3;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;

};


const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
             start.disabled = false;
        }

    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
    start.disabled = false;
};

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


// Testing start

// Testing End



start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

