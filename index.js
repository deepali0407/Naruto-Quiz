var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score=0;
console.log(chalk.black.bold.bgYellow('Welcome NARUTO Fan'));
var playerName = readlineSync.question('Enter Your Name: ');
console.log(chalk.bold('Hello! ' + chalk.bold.yellow(playerName.toUpperCase())));
//array of high scores
var highScore = [{
name: "Deepali" , score: "10"},
{
  name: "Niyati", score: "5"
},]
//array of questions
var quizQues = [{
    question:"Who tricks Naruto into stealing the scroll in the first episode?\na.Iruka\nb.Mizuki\nc.Hiruzen\nd.Mitsuki\n",
    answer: "b"
},{
    question:"What is the name of Zabuza sword?\na. Haku\nb. Samehada\nc. Kabutowari\nd. Kubikiribocho\n",
    answer: "d"
},{
    question:"Which team isn't included in the 'Rookie 9' classification during the Chunin Exams?\na. Team 7\nb. Team Guy\nc. Team 8\nd. Team 10\n",
    answer: "b"
},{
    question:"Which of Gamabunta's sons does Naruto accidentally summon during his fight against Gaara?\na. Gamakichi\nb. Gamamoro\nc. Gamatatsu\nd. Gamaken\n",
    answer: "a"
},{
    question:"Which members of the Sound Village go to Konoha to bring Sasuke to Orochimaru?\na. Jirobo,Kidomaru,Kimimaro,Ukon\nb. Jirobo,Kidomaru,Kabuto,Sakon\nc. Kidomaru,Tayuya,Sakon,Ukon\nd. Jirobo,Kidomaru,Tayuya,Sakon,Ukon\n",
    answer: "d"
},{
    question:"Which of the Eight Gates does Rock Lee stop at against Gaara in the Chunin Exams?\na. 5th Gate: The Gate of Closing\nb. 4th Gate: The Gate of Pain\nc. 6th Gate: The Gate of Joy\nd. 3rd Gate: The Gate of Life\n",
    answer: "a"
},{
    question:"How many times does Naruto use the Nine Tails' power in Part 1 of the series?\n\na. 7\nb. 4\nc. 5\nd. 9\n",
    answer: "a"
},{
    question:"Which one of the five major Hidden Villages is the only one to never produce a member of the Akatsuki?\na. Hidden Sound\nb. Hidden Cloud\nc. Hidden Mist\nd. Hidden Stone\n",
    answer: "b"
},{
    question:"Which former Kage was also the Jinchuriki of the Three Tails?\na. The Fourth Mizukage\nb. The First Raikage\nc. The Fifth Kazekage\nd. The Second Tsuchikage\n",
    answer: "a"
},{
    question:"The red spiral on the back of Konoha vests symbolizes a friendship with which clan?\na. Senju\nb. Uzumaki\nc. Namikaze\nd. Uchiha\n",
    answer: "b"
}]
//function
function game (question,answer)
{
 var userAnswer= readlineSync.question(question);
 if(userAnswer.toLowerCase() === answer.toLowerCase())  {
   console.log(chalk.keyword('green')("Right"));
   score++;
 }else{
  console.log(chalk.keyword('red')("Wrong"));
  score;
 } console.log(chalk.white("---------------"));
}
for(var i=0;i<quizQues.length;i++){
  var currentQuestion= quizQues[i];  
  if(i%2 == 0){
 game(chalk.keyword('purple')(currentQuestion.question),(currentQuestion.answer))
  }else{
    game(chalk.yellow(currentQuestion.question),(currentQuestion.answer))
  }
}
 console.log(("You Scored : ")+chalk.red.bold(score));
 if(score === 10){
    console.log(chalk.yellowBright("** CONGRATULATIONS ** You have beaten highscore."));
  }else{
    console.log(chalk.yellowBright("Better Luck Next Time! "))
  }
console.log("\n");
console.log("Here is SCORE TABLE: ")
for(var k=0;k<highScore.length;k++){
var currentHighScore = highScore[k];
console.log(chalk.white.bold(currentHighScore.name + " " + currentHighScore.score))}

