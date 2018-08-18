// Function constructor
var Question = (function(question, answersArr, correctAnswer){
  this.question = question;
  this.answersArr = answersArr;
  this.correctAnswer = correctAnswer;
  this.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answersArr.length; i++) {
      console.log([i] + ': ' + this.answersArr[i]);
    }
  };
  this.checkAnswer = function(userAnswer) {
    if (userAnswer == this.correctAnswer){
      playerScore = playerScore + 1;
      console.log('winner winner chicken dinner. Score: ' + playerScore);
    }
    else {
      console.log('nope');
    }
    nextQuestion(userAnswer);
  }
})

var playerScore = 0;
var question1 = new Question('This is the question', ['This is an answer', 'This is not right'], 0);
var question2 = new Question('The answer is red', ['Green', 'Blue', 'Red'], 2);

var questionsArr = [
  question1,
  question2,
]

// Function: Select and display random question and prompt for answer
function fireQuestion() {
  var randomQuestion= questionsArr[Math.floor(Math.random() * questionsArr.length)];
  randomQuestion.displayQuestion();
  randomQuestion.checkAnswer(prompt("Please enter answer"));
}

// Function: Fires next question, handles exit.
function nextQuestion(userAnswer) {
  if (userAnswer != 'exit') {
    fireQuestion();
  }
  else {
    console.log('Game stopped. Final score: ' + playerScore);
  }
}

fireQuestion();