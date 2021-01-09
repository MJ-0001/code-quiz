// Button variables
var startBtn = document.getElementById('start-button');
var nextBtn = document.getElementById('next-button');

// Button event listeners
startBtn.addEventListener('click', countDown);
startBtn.addEventListener('click', randomQuestion);
nextBtn.addEventListener('click', randomQuestion);

// Countdown timer function
function countDown() {
  var timeCounter = document.getElementById('time');
  var timeTotal = 30;
  setInterval(function() {
    if (timeTotal < 0) {
      clearInterval(timeTotal = 0);
    }
    timeCounter.innerHTML = timeTotal;
    timeTotal -= 1;
  }, 1000)
}

// Questions and answers object
var questionObj = [
  {
    number: 1,
    question: 'What is an array?',
    answers: ['a data structure', 'a function', 'a condition', 'a method']
  },
  {
    number: 2,
    question: 'Which of these is used to add conditions to JavaScript code?',
    answers: ['full-stop', 'if/else statement', 'array', 'template literal']
  },
  {
    number: 3,
    question: 'What does JavaScript use for repeating code with a condition?',
    answers: ['key-value pairs', 'variables', 'loops', 'functions']
  },
  {
    number: 4,
    question: 'A class constructor is used in conjunction with what data structure?',
    answers: ['AJAX', 'async await', 'objects', 'DOM']
  }
]

// Random question generator
function randomQuestion() {
  var randNum = Math.floor(Math.random() * questionObj.length);
  var randQuest = questionObj[randNum].question;
  var quizQuestion = document.getElementById('quiz-question');
  quizQuestion.innerHTML = randQuest;

  var answer1 = document.getElementById('answ1');
  var answer2 = document.getElementById('answ2');
  var answer3 = document.getElementById('answ3');
  var answer4 = document.getElementById('answ4');
  var score = document.getElementById('outcome');

  nextBtn.addEventListener('click', function() {score.innerHTML = ""})
  
  if (randNum === 0) {
    answer1.innerHTML = questionObj[0].answers[0];
    answer1.addEventListener('click', function() {
      score.innerHTML = 'Correct!';
    })
    answer2.innerHTML = questionObj[0].answers[1];
    answer2.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer3.innerHTML = questionObj[0].answers[2];
    answer3.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer4.innerHTML = questionObj[0].answers[3];
    answer4.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
  }
  else if (randNum === 1) {
    answer1.innerHTML = questionObj[1].answers[0];
    answer1.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer2.innerHTML = questionObj[1].answers[1];
    answer2.addEventListener('click', function() {
      score.innerHTML = 'Correct!';
    })
    answer3.innerHTML = questionObj[1].answers[2];
    answer3.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer4.innerHTML = questionObj[1].answers[3];
    answer4.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
  }
  else if (randNum === 2) {
    answer1.innerHTML = questionObj[2].answers[0];
    answer1.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer2.innerHTML = questionObj[2].answers[1];
    answer2.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer3.innerHTML = questionObj[2].answers[2];
    answer3.addEventListener('click', function() {
      score.innerHTML = 'Correct!';
    })
    answer4.innerHTML = questionObj[2].answers[3];
    answer4.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
  }
  else if (randNum === 3) {
    answer1.innerHTML = questionObj[3].answers[0];
    answer1.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer2.innerHTML = questionObj[3].answers[1];
    answer2.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
    answer3.innerHTML = questionObj[3].answers[2];
    answer3.addEventListener('click', function() {
      score.innerHTML = 'Correct!';
    })
    answer4.innerHTML = questionObj[3].answers[3];
    answer4.addEventListener('click', function() {
      score.innerHTML = 'False!';
    })
  }
}



