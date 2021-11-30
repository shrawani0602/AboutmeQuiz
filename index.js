var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name :");
console.log("Hello "+userName+" let's find out how much you know Shrawani " );

score=0;

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("Right answer");
    score++;
  }
  else
  {
    console.log("wrong answer");
    score--;
  }
}

var quesans=[
  {
    question:"What is Shrawani's favouite color?",
    answer:"Black"
  },
  {
    question:"What  Shrawani like to do in free time(music/game?",
    answer:"Music"
  },
  {
    question:"Which month if her birthday?",
    answer:"Feburary"
  },
  {
    question:"Does she like cat,dog or both?",
    answer:"Both"
  },
  {
    question:"What is her nickname?",
    answer:"pappy"
  },
  
]

for(var i=0;i<quesans.length;i++)
{
var curr=quesans[i];
play(curr.question,curr.answer);
}

function scores() {
  console.log("Your final score : ", score);

  
}

scores();


