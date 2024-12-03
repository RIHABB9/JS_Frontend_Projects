let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");


const weekdays =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


function formatTime(time){
    return time < 10 ? "0" + time : time;  //  0 : 45 : 10  -> 00 : 45 : 10 
}

function updateClock(){


    const today = new Date();
   // console.log(today);
    let date = today.getDate();
   // console.log(date)
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    // console.log(day,month)
    // console.log(today.getDay(),today.getMonth());

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());


     dateContainer.innerHTML = ` <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;   

     hoursContainer.textContent = hours + ":";
     minutesContainer.textContent = minutes + ":";
     secondsContainer.textContent = seconds;

}

setInterval(updateClock,1000);