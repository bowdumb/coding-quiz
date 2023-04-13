var questCont = document.getElementById("question-container");
var questionEl = document.querySelector(".question");
var startButton = document.querySelector('.startbtn');
var btnAnswerEl = document.getElementById('answer-btn');
var answerButton1 = document.querySelector(".btn1");
var answerButton2 = document.querySelector(".btn2");
var answerButton3 = document.querySelector(".btn3");
var answerButton4 = document.querySelector(".btn4");
var timerEl = document.getElementById('timer');
var questions = [
    {
  
      question:"What is the most widely planted grape in the world?",        
      answer1: "Cabernet Sauvignon", 
      answer2: "Pinot Grigio",
      answer3: "Pinot Noir",
      answer4: "Sauvignon Blanc",
      correct: "Cabernet Sauvignon",
  },
      
   {
  
      question: "What two grapes are the genetic parents of Cabernet Sauvignon?",
      answer1: "Cabernet Franc & Pinot Noir",
      answer2: "Syrah & Grenache",
      answer3: "Sauvignon Blanc & Cabernet Franc",
      answer4: "Merlot & Cabernet Franc",
      correct: "Sauvignon Blanc & Cabernet Franc",
  },
  
  {
  
      question: "What does the French word 'battonage' refer to?",
      answer1: "The barrels that are used in fermentation",
      answer2: "The act of stirring the lees, or dead yeast",
      answer3: "The tools used to prune vines in the vineyard",
      answer4: "The practice of opening a champagne with a sabre",
      correct: "The act of stirring the lees, or dead yeast",
  },
  
  {
      
      question: "What does it mean to 'drop 'fruit?",
      answer1: "To lose grapes when transporting them to the winery during harvest",
      answer2: "To receive a delivery of a case of wine",
      answer3: "To prune grapes from the vine to increase quality of remaining grapes",
      answer4: "To spill your glass of wine",
      correct: "To prune grapes from the vine to increase quality of remaining grapes",
  }
  ];

startButton.addEventListener('click', startQuiz);
var timeLeft = 60;

function startQuiz() {
    console.log("RELEASE TEH QUIZ!!!");
    // var timeLeft = 5;
    startButton.classList.add('hide');
    questionEl.textContent = questions[0].question


        answerButton1.textContent = questions[0].answer1;
        answerButton2.textContent = questions[0].answer2;
        answerButton3.textContent = questions[0].answer3;
        answerButton4.textContent = questions[0].answer4;
        
    answerButton1.addEventListener('click', nextQuestion)
    answerButton2.addEventListener('click', nextQuestion)
    answerButton3.addEventListener('click', nextQuestion)
    answerButton4.addEventListener('click', nextQuestion)

    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft + " seconds left!";
            timeLeft--;
            localStorage.setItem("score", timeLeft);
        } else {
            // alert("Time is up - Now go pull a cork and study up!");
            clearInterval(timeInterval);
            timerEl.textContent = "";
            
            

            return;
        

            
        }
    },1000);
}

var questionIndex = 0
function nextQuestion() {

    
    questionIndex++;
    var prevQuestionIndex = questionIndex-1;
    console.log(this.textContent);
    console.log(questions[prevQuestionIndex].correct);

    if (questionIndex > 4) {
        return alert("Hooray!");
    }

    if (this.textContent != questions[prevQuestionIndex].correct) {
        timeLeft -= 10;
    }

    

    questionEl.textContent = questions[questionIndex].question


        answerButton1.textContent = questions[questionIndex].answer1;
        answerButton2.textContent = questions[questionIndex].answer2;
        answerButton3.textContent = questions[questionIndex].answer3;
        answerButton4.textContent = questions[questionIndex].answer4;
        console.log(timeLeft);

}


function answerChoice() {

}

// var quizQuestion = Object.keys()


QuestionArray = [
    "What is the most widely planted grape in the world?",
    "What two grapes are the genetic parents of Cabernet Sauvignon?",
    "What does the French word 'battonage' refer to?",


]











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

