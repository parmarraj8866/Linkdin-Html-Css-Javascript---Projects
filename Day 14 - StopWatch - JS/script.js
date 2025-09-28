const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const millisecond = document.querySelector(".millisecond");


var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var timer;

startBtn.addEventListener('click', () => {
    console.log("Start");


    if (timer) {
        return;
    }

    timer = setInterval(function () {

        millisecond.innerText = ms
        ms++

        if (ms >= 100) {
            ms = 0
            s++;
            if (s < 10) {
                second.innerText = `0${s}`
            } else {
                second.innerText = `${s}`
            }
        }

        if (s == 60) {
            s = 0;
            m++;
            if (m < 10) {
                minutes.innerText = `0${m}`
            } else {
                minutes.innerText = `${m}`
            }
        }
        if (m == 60) {
            m = 0;
            h++
            if (h < 10) {
                hours.innerText = `0${h}`
            } else {
                hours.innerText = `${h}`
            }
        }
        if (h === 60) {
            h = 0;
        }

    }, 10)
})

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
})

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null
    h = 0
    s = 0
    m = 0
    ms = 0
    hours.innerText = "00"
    minutes.innerText = "00"
    second.innerText = "00"
    millisecond.innerText = "00"
})