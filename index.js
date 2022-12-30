var readlineSync = require('readline-sync');
score=0;
var highScorer = {
  name:"Saurav R",
  highScore : 10,
}
console.log(" *If you answer at least 4 question correct from level One you are qualified to play level Two \n")
var userName = readlineSync.question("Please type your name:");
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer){
    score++;
    console.log("Your answer is correct");
    console.log("Your current score is : "+score);
  }
  else{
    console.log("Sorry your answer is wrong");
    console.log("Your current score is : "+score);
  }
}
var levelOne = [
  {
    question:"What is 'OS'abbreviation ",
    answer:"operating system",
  },
  {
    question:"What is 'VPN' abbreviation ",
    answer:"virtual private network",
  },
  {
    question:"What is 'DNS' abbreviation",
    answer:"domain name system",
  },
  {
    question:"What is 'HTTP' abbreviation",
    answer:"hypertext transfer protocol",
  },
{
    question:"What is 'FTP' abbreviation",
    answer:"file transfer protocol",
  },
]
var levelTwo = [
  {
    question:"'IP' stands for Internet Protocol(True/False) ",
    answer:"true",
  },
  {
    question:"'HTML' stands for Hypertext Markup Language(True/False) ",
    answer:"true",
  },
  {
    question:"'XML' is not a markup language(True/False) ",
    answer:"false",
  },
  {
    question:"MySql is not a database (True/False) ",
    answer:"false",
  },
{
    question:"Post is a http method (True/False)",
    answer:"true",
  },
]
for(i=0 ; i<levelOne.length ; i++){
  play(levelOne[i].question,levelOne[i].answer);
}
console.log();
if(score>=4){
  console.log("Congrats "+userName+" are qualified for level Two quez ")
  for(i=0 ; i<levelTwo.length ; i++){
    play(levelTwo[i].question,levelTwo[i].answer);
  }
}else{
  console.log("Sorry "+userName+" your do not qualify for the next round");
}

console.log("Your final score is : "+score+" and the highest score is "+highScorer.highScore+" and the high scorer is "+highScorer.name);