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

  let finalTime=`${hours}:${minutes}:${seconds}`;
  let finalDate = `${month}/${date}/ ${year}
    `;
  let test= ` 
  <ul>
   <li> Time: ${finalTime} </li>
  </ul> `
  console.log(test);
  document.querySelector('#time').innerText=finalTime;
  document.querySelector('small').innerText=clockFormate;
  document.querySelector('span').innerText=finalDate;
  
  setInterval(digitalClock, 1000);
  
}

digitalClock();


