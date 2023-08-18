const seconds=document.getElementById('seconds');
const minutes=document.getElementById('minutes');
const hours=document.getElementById('hours');

function getTime(){
    const time=new Date();
    const secondsvalue=time.getSeconds();
    const minutesvalue=time.getMinutes();
    const hoursvalue=time.getHours();

    const timeinterval=6;
    seconds.style.transform='rotate('+(secondsvalue*timeinterval)+ 'deg)'
    minutes.style.transform='rotate('+(minutesvalue*timeinterval +secondsvalue/10)+ 'deg)'
    hours.style.transform='rotate('+(hoursvalue*30 +minutesvalue/2)+ 'deg)'
}
setInterval(getTime,100);