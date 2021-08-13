const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const total_seconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor((total_seconds / 3600) % 24);
    const minutes = Math.floor(total_seconds / 60) % 60;
    const seconds = Math.floor(total_seconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

var target = prompt("Enter date: ",'1 January 2022')
const newYears = target != null ? target : '1 January 2022';

// initial call
countdown();

setInterval(countdown, 1000);
