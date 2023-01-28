let digital = document.querySelector('.digital');
let pointerSeconds = document.querySelector('.ponteiros p p_s');
let pointerMinutes = document.querySelector('.poteiros p p_m');
let pointerHours = document.querySelector('.ponteiros p p_h');

const fixZero = (time)=>{
    if(time<10){
        return `0${time}`
    }else{
       return time
    }
}

const updateClock =()=>{
    var date = new Date();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    digital.innerText = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`
}

setInterval(updateClock, 1000)
