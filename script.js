const $ = document.querySelector.bind(document)
const newYear = '1 Jan 2023'
//  future
function countDown() {
    const newyearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecond = (newyearDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const mins = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;
    
    // console.log(days, hours, minutes, seconds);

    $('.days-time h3').innerText = formathFront(days);
    $('.hours-time h3').innerText = formathFront(hours)
    $('.mins-time h3').innerText = formathFront(mins)
    $('.seconds-time h3').innerText = formathFront(seconds)
    
}
function formathFront(time){
    // if(time < 10){
    //     `0${time}`
    // }else{
    //     time
    // }
    return time < 10 ? `0${time}` : time
}
formathFront()
countDown() /* important when loading the website */
setInterval(countDown , 1000)
