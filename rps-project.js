/*window.onload= loadAlert;
function loadAlert() {
alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
}*/

function gameIntro() {
    window.onload=gameIntro;
    alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
    let input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "));
      return input;

    console.log(`"We are playing" ${input} "rounds."`);
  }
  
let items = ["rock", "paper", "scissors"];

console.log(items);

function computer() {
    let number = Math.floor(Math.random() * items.length); 
    let random_computerChoice = items[number];
        return random_computerChoice;
    console.log(random_computerChoice);    
}

var PlayerOne = prompt("Rock, Paper, or Scissors");
 var PlayerTwo = prompt("Rock, Paper, or Scissors");

 

/*var Game = function(input,pl2){
    let pl1 = PlayerOne
    let pl2 = computer();

    var r = "Rock";
    var p = "Paper";
    var s = "Scissors";
    if(pl1 === pl2){
        console.log("Tie");
    }else{
        if(pl1===r&&pl2===s||pl1===p&&pl2===r||pl1===s&&pl2===p){
            console.log("Player One Wins!");
        }else{
            console.log("Player Two Wins!");
        }
    }
};*/

/*Game(PlayerOne,PlayerTwo);
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`user choice => ${userChoice}`);
    console.log(`The computer chose is ${computerChoice}`);
    switch (userChoice + computerChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        //console.log(`User Win's.`);
        var span = document.getElementById('s').innerText = 'user Wins!'
       // userScore_span.innerText++;
        break;

      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
       // console.log(`User looses.`);
       // computerScore_span.innerText++;
        var span = document.getElementById('s').innerText = 'user loses!'
        break;
  
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
       // console.log(`Its a Tie`);
        var span = document.getElementById('s').innerText = 'It\'s a tie!'
        break;
    }
  }*/


console.log(getComputerChoice(items));

console.log(game(),getComputerChoice());