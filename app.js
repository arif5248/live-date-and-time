function digitalClock(){
  let allDate= new Date();
  
  let hours= allDate.getHours();
  let minutes=allDate.getMinutes();
  let seconds= allDate.getSeconds();
  let date = allDate.getDate();
  let month = allDate.getMonth()+1;
  let year = allDate.getFullYear();
  let clockFormate='AM';
  
  if(hours==0){
    hours=12;
  }
  else if(hours>12){
    hours=hours-12;
    clockFormate='PM'
  }

  hours= hours<10 ? '0'+hours: hours;
  minutes=minutes<10 ? '0'+minutes : minutes;
  seconds= seconds<10 ? '0'+seconds : seconds;
  date=date<10 ? '0'+date : date;
  month= month<10 ? '0'+month : month
  let finalTime=`${hours}:${minutes}:${seconds}`;
  let finalDate = `${month}/${date}/ ${year}`;
  
  
  document.querySelector('#time').innerText=finalTime;
  document.querySelector('small').innerText=clockFormate;
  document.querySelector('span').innerText=finalDate;
  
  setInterval(digitalClock, 1000);
  
}

digitalClock();

function counter(){
  let deadline = new Date("May 22, 2024 22:00:00").getTime();
  let now = new Date().getTime();
  let leftTime = deadline - now;
  let days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((leftTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  let minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
  document.getElementById('counterDay').innerText=days;
  document.getElementById('counterHour').innerText=hours;
  document.getElementById('counterMinute').innerText=minutes;
  document.getElementById('counterSecond').innerText=seconds;

  setInterval(counter,1000);
}

counter();
