    function gameIntro() {
      //window.onload=gameIntro;
      alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nEnter playGame() in the console to start the game.");
      var input = parseInt(prompt("How many rounds of Rock, Paper, Scissors do you want to play?:  "))
      if (input !=null){
        return input;
      } 
      console.log( "You decided to play " + input + " rounds!");
    }
  
    const items = ["rock", "paper", "scissors"];

    const scores = [
      
      {player: "rock", computer: "scissors", win: "player"}, 
      {player: "paper", computer: "rock", win: "player"},
      {player: "scissors", computer: "paper", win: "player"},
      {player: "scissors", computer: "rock", win: "computer"},
      {player: "rock", computer: "paper", win: "computer"},
      {player: "paper", computer: "scissors", win: "computer"},
    ];
      
    var player;
    var comp;

    function playerOne() {  
        let player = prompt("Please select one item: rock, paper, or scissor.");      
          if (player.toLowerCase() !=null){
            return player;
          } 
        }    
    function computer() {
        var num = Math.floor(Math.random() * items.length); 
        var comp = items[num].toLowerCase();
          return comp;
        }
    
    function compare (player, comp) { 
      
      let tie = 0;
      let win = 0;
      let loss = 0;
      let playerScore = 0;
      let computerScore = 0;

      
        if(player === comp){
            return "The choice is a tie";

        }
        else if(player === "rock"){
              if(comp === "scissors"){
                return "Rock wins!"
              }
                else{
                  return "Paper wins"
        }  

        }else if(player === "paper"){
                if(comp ==="rock"){
                    return"Paper wins!";
                }else {
                    return "scissors wins";
                }
        }  
      }    
    
// let numberGreaterthen5 = [];

// numArray.forEach(function (number) {
//     if (number > 5) {
//         numberGreaterthen5.push(number);
//     }
// });
    
//rock and scissors, rock wins
//scissors and paper, scissors wins
//paper and rock, paper wins


    function playGame(){    
      var rounds = 0;
      var start = gameIntro();
      alert("You and the computer are playing " + start + " rounds.")
      alert("You go first!");

        console.log("Round: " + rounds++);
          var player = playerOne();
          var p1 = player;
          var comp = computer();
          var cp = comp;
          console.log("You selected " + p1 + " and the Computer selected " + cp +"!"); 
          
          var result = compare(p1, cp);
          console.log(result);
      
    
    } 
  
