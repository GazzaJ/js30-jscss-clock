
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsFraction = seconds / 60;
    const secondsRotate = secondsFraction * 360;
    secondHand.style.transform = `rotate(${secondsRotate}deg)`;

    const minutes = now.getMinutes();
    const minutesFraction = (secondsFraction + minutes) / 60;
    const minutesRotate = minutesFraction * 360;
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
    
    const hours = now.getHours();
    const hoursFraction = (minutesFraction + hours) / 12;
    const hoursRotate = hoursFraction * 360;
    hourHand.style.Transform = `rotate(${hoursRotate}deg)`;
}

setInterval(setTime, 1000)