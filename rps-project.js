/*window.onload= loadAlert;
function loadAlert() {
alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
}*/

window.onload=playerChoice;
function playerChoice() {
    let sum = 0;

    let input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "));
}
    /*while (input => 0) {
        sum += input;


    }
    console.log(`the sum is ${sum}`);
}*/
let items = ["rock", "paper", "scissors"];
console.log(items);

function computerChoice() {
    let number = Math.floor(Math.random() * items.length); 
    let random_computerChoice = items[number];
        return random_computerChoice;
}


console.log(computerChoice(items));

var computerMove = computerChoice(items);
console.log("The computer chose", computerChoice());
