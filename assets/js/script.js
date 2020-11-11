
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setTime() {
    const now = new Date();

    const seconds = now.getUTCSeconds();
    const secondsDegrees = (((seconds / 60) * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getUTCMinutes();
    const minutesDegrees = (((minutes / 60) * 360) + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    
    const hours = now.getUTCHours();
    const hoursDegrees = ((((hours + minutes / 60) / 24) * 360) + 90);
    hourHand.style.Transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setTime, 1000)