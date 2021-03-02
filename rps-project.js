function gameIntro() {
    window.onload=gameIntro;
    alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
    let input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "));
      return input;

    console.log(`"We are playing" ${input} "rounds."`);
  }
  
var items = ["rock", "paper", "scissors"];
/*var win = 0;
var loss = 0;
var tie = 0;
for(i = 0; i < input.length; i++){*/

  console.log(items);

  function computer() {
      let number = Math.floor(Math.random() * items.length); 
      let random_computerChoice = items[number];
          console.log(`The computer chose ${random_computerChoice}.`);  
  }

  function playerOne() {  
    var player = prompt("Please choose one items: Rock, paper, or scissors.").toLowerCase();;
        if (player != null) {  
        console.log(`Player one chose ${player}.`);  
    }
  function playGame (computer,playerOne){
      //let player =  prompt("Please choose one items: Rock, paper, or scissors.").toLowerCase();
      var r = "Rock";
      var p = "Paper";
      var s = "Scissors";
      if(playerOne === computer){
          console.log("It'a tie!");
      }else{
          if(playerOne===r && computer ===s|| 
            playerOne ===p && computer===r||
            playerOne ===s && computer ===p){
              console.log("Player One Wins!");
          }else{
              console.log("Player Two Wins!");
          }
      }
};


//var results = compare(userChoice,computerChoice);



