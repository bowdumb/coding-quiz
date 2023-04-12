var count = 60;

var timeEl = document.querySelector("#timer");

var startButt = document.querySelector('.startbtn');




function setCounterText() {
    timeEl.texContent = count;
}

startButt.addEventListener("click", function() {
    console.log (setCounterText);
    
    count--;
    setCounterText();
},1000);

