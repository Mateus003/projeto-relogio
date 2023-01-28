let digital = document.querySelector('.digital');
let pointerSeconds = document.querySelector('.p_s');
let pointerMinutes = document.querySelector('.p_m');
let pointerHours = document.querySelector('.p_h');

const fixZero = (time)=>{
    if(time<10){
        return `0${time}`;
    }else{
       return time;
    }
}

const updateClock =()=>{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    digital.innerText = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    let secondsDeg = (360/60)*seconds -90;
    let minutesDeg = (360/60)*minutes -90;
    let hoursDeg = (360/12)*hours -90;

    pointerSeconds.style.transform = `rotate(${secondsDeg}deg)`;
    pointerMinutes.style.transform = `rotate(${minutesDeg}deg)`;
    pointerHours.style.transform = `rotate(${hoursDeg}deg)`;



}
updateClock();
setInterval(updateClock, 1000)
