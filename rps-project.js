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
    
    /*const scores = [
      {player: "rock", computer: "scissors", win: "player"}, 
      {player: "paper", computer: "rock", win: "player"},
      {player: "scissors", computer: "paper", win: "player"},
      {player: "scissors", computer: "rock", win: "computer"},
      {player: "rock", computer: "paper", win: "computer"},
      {player: "paper", computer: "scissors", win: "computer"},
    ];*/
      
   
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
  

      /*  const tally = scores.filter ((score, player, comp) => score.player === "rock" && score.computer === "scissors"|| 
        score.player === "paper" && score.computer === "rock"||
        score.player === "scissors" && score.computer === "paper");
              return true;
    }      
        console.log(tally);

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
 */   
    
    function playGame(){    
      var rounds = 0;
      var res;
      var start = gameIntro();
      alert("You and the computer are playing " + start + " rounds.")
      alert("You go first!");

        console.log("Round: " + rounds++);
          var player = playerOne();
          var p1 = player;
          var comp = computer();
          var cp = comp;
       
          return("You selected " + p1 + " and the computer selected " + cp +"!"); 
        
        function score (p1, cp) {  
          switch (p1,cp) { 
            case p1 == cp: 
              return tie;
              break;
            default:
          return ("try again");
        } 
      } 
        var res = score();
        return res
    }