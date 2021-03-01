/*window.onload= loadAlert;
function loadAlert() {
alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
}*/

function gameIntro() {
    window.onload=gameIntro;
    alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
    let input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "));
      return input;

    console.log(`"the sum is" ${input}`);
  }
  
let items = ["rock", "paper", "scissors"];

console.log(items);

function getComputerChoice() {
    let number = Math.floor(Math.random() * items.length); 
    let random_computerChoice = items[number];
        return random_computerChoice;
}

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
  }

  

var beginGame = playGame();

var computerMove = getComputerChoice(items);

