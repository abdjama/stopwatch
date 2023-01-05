// calls timer() when button with class of 'start' is clicked
document.querySelector(".start").addEventListener("click", timer); 

let intervalId;
// div where the time will be displayed
let div = document.querySelector(".inner");
let hour = 0;
let minute = 0;
let second = 0;
let time = hour + ":" + minute + ":" + second;
// displaying default time of 0:0:0
div.innerHTML = time;
// function timer() contains three functions: start(), stop(), and reset()
function timer() {
    start()
    function start() {
    // if intervalId has value, then setInterval function is running, so there's no need to call it again
    if (!intervalId) {
        intervalId = setInterval(function() {
            // covering special circumstances. 60 sec in min, 60 min in hour. need to reset to 0
            if (second == 59 && minute == 59) {
                second = 0;
                minute = 0;
                hour++
                time = hour + ":" + minute + ":" + second;
                div.innerHTML = time;
            }
            else if (second == 59) {
                second = 0;
                minute++;
                time = hour + ":" + minute + ":0" + second;
                div.innerHTML = time;
            }
            else {
                // single digit nums will have zero in front
                if (second < 9) {
                    second++;
                    time = hour + ":" + minute + ":0" + second;
                    div.innerHTML = time;
                }
                else {
                    second++;
                    time = hour + ":" + minute + ":" + second;
                    div.innerHTML = time;
                }
            }
            
         }, 1000);
    }
    document.querySelector(".stop").addEventListener("click", stop);
    document.querySelector(".reset").addEventListener("click", reset);
    }
    function stop() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    function reset() {
        clearInterval(intervalId)
        intervalId = null
        hour = 0;
        minute = 0;
        second = 0;
        time = hour + ":" + minute + ":" + second;
        div.innerHTML = time;
    }
}