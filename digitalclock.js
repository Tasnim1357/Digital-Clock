const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateclock(){
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm= "AM";


    if(h>12){
        h=h-12;
        ampm= "PM";
    }

    hourEl.innerText= h;
    minuteEl.innerText= m;
    secondEl.innerText=s;
    ampmEl.innerText = ampm;


}
updateclock();




// Update the clock every 1 second
setInterval(updateclock, 1000);
