var questCont = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var startButton = document.querySelector('.startbtn');
var btnAnswerEl = document.getElementById('answer-btn');
timerEl = document.getElementById('timer');


startButton.addEventListener('click', startQuiz);


function startQuiz() {
    console.log("RELEASE TEH QUIZ!!!");
    var timeLeft = 60;
    startButton.classList.add('hide');
    // startButton.addEventListener("click", )
    // questCont.classList.remove('hide');
    //set question text to hide?
    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft + " seconds left!";
            timeLeft--;
        } else {
            // alert("Time is up - Now go pull a cork and study up!");
            clearInterval(timeInterval);
            timerEl.textContent = "";
            return;
        }
    },1000);
}


function quizQuestion() {

}


function answerSelect() {

}



var question1Arr = {

        question:"What is the most widely planted grape in the world?",        
        answer1: "Cabernet Sauvignon", correct: true,
        answer2: "Pinot Grigio", correct: false ,
        answer3: "Pinot Noir", correct: false,
        answer4: "Sauvignon Blanc", correct: false,
}   
    













// var count = 60;

// var timeEl = document.querySelector("#timer");

// var startButt = document.querySelector('.startbtn');




// function setCounterText() {
//     timeEl.texContent = count;
// }

// startButt.addEventListener("click", function() {
//     console.log (setCounterText);
    
//     count--;
//     setCounterText();
// },1000);

