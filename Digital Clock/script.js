function findTime() {

    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    var period = "AM";

    if (hour >= 12) {
        period = "PM"
    } else {
        period = "AM"
    }

    if (hour > 12) {
        hour = hour - 12
    }

    hour = (hour < 10) ? `0${hour}` : hour
    minute = (minute < 10) ? `0${minute}` : minute
    second = (second < 10) ? `0${second}` : second

    document.querySelector(".hours").innerHTML = hour
    document.querySelector(".minute").innerHTML = minute
    document.querySelector(".second").innerHTML = second
    document.querySelector(".period").innerHTML = period
}

setInterval(findTime, 1000)