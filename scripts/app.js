// Global variables
var startBtn = document.getElementById('start-button');
var nextBtn = document.getElementById('next-button');
var prevBtn = document.getElementById('previous-button');

// Event listeners
startBtn.addEventListener('click', countDown);
startBtn.addEventListener('click', loadQuestion);
nextBtn.addEventListener('click', loadQuestion);
nextBtn.addEventListener('click', countDown);
nextBtn.addEventListener('click', nextButtonCounter);
prevBtn.addEventListener('click', prevButtonCounter);

// Countdown timer function
function countDown() {
  var timeLeftDisplay = document.getElementById('time');
  var timeLeft = 10;
  setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
    }
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000)
}

// Functions to log what question user is on
var numOfNextClicks = 0;

function nextButtonCounter() {
  numOfNextClicks++;
  var counter = document.getElementById('counter')
  counter.innerHTML = numOfNextClicks;
}

function prevButtonCounter() {
  numOfNextClicks--;
  var counter = document.getElementById('counter')
  counter.innerHTML = numOfNextClicks;
}

// Randon question generator
function randonQuestion() {
  var randNum = Math.floor(Math.random() * 4);
  var questNum = questionObj[randNum].question;
  var quizQuestion = document.getElementById('quiz-question');
  quizQuestion.innerHTML = questNum;
}

// Questions and answers object
var questionObj = [
  {
    question: 'Question 1: What is an array?',
    answers: ['a data structure', 'a function', 'a condition', 'a method']
  },
  {
    question: 'Question 2: Which of these is used to add conditions to JavaScript code?',
    answers: ['full-stop', 'if/else statement', 'array', 'template literal']
  },
  {
    question: 'Question 3: What does JavaScript use for repeating code with a condition?',
    answers: ['key-value pairs', 'variables', 'loops', 'functions']
  },
  {
    question: 'Question 4: A class constructor is used in conjunction with what data structure?',
    answers: ['AJAX', 'async await', 'objects', 'DOM']
  }
]





// // Questions and answers object 1
// var questionObj1 = [
//   {
//       question: 'Question 1: What is an array?',
//       answers: [
//           {text: 'a data structure', correct: true},
//           {text: 'a function', correct: false},
//           {text: 'a condition', correct: false},
//           {text: 'a method', correct: false}
//       ]
//   }
// ]

// // Questions and answers object 2
// var questionObj2 = [
//   {
//       question: 'Question 2: Which of these is used to add conditions to JavaScript code?',
//       answers: [
//           {text: 'full-stop', correct: false},
//           {text: 'if/else statement', correct: true},
//           {text: 'array', correct: false},
//           {text: 'template literal', correct: false}
//       ]
//   }
// ]

// // Questions and answers object 3
// var questionObj3 = [
//   {
//       question: 'Question 3: What does JavaScript use for repeating code with a condition?',
//       answers: [
//           {text: 'key-value pairs', correct: false},
//           {text: 'variables', correct: false},
//           {text: 'loops', correct: true},
//           {text: 'functions', correct: false}
//       ]
//   }
// ]

// // Questions and answers object 4
// var questionObj4 = [
//   {
//       question: 'Question 4: A class constructor is used in conjunction with what data structure?',
//       answers: [
//           {text: 'AJAX', correct: false},
//           {text: 'async await', correct: false},
//           {text: 'objects', correct: true},
//           {text: 'DOM', correct: false}
//       ]
//   }
// ]

// // Function to load question one
// function loadQuestion() {
//   var quizQuestion = document.getElementById('quiz-question');
//   quizQuestion.innerHTML = questionObj1[0].question;
// }