var minutes = 00; 
var seconds = 00; 
var appendTens = document.getElementById("minutes")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('swap');
var Interval ;

buttonStart.onclick = function() {
  
  clearInterval(Interval);
   Interval = setInterval(startTimer, 10);
}

  buttonStop.onclick = function() {
     clearInterval(Interval);
}


buttonReset.onclick = function() {
   clearInterval(Interval);
  minutes = "00";
    seconds = "00";
  appendTens.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
}

 

function startTimer () {
  minutes++; 
  
  if(minutes <= 10){
    appendTens.innerHTML = "0" + seconds;
  }
  
  if (minutes > 9){
    appendTens.innerHTML = seconds;
    
  } 
  
  if (minutes > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    minutes = 5;
    appendTens.innerHTML = "0" + minutes;
  }
  
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }

}

