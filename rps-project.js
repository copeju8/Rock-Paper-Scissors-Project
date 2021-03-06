   
      
    
    function gameIntro() {
      //window.onload=gameIntro;
      alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nEnter playGame() in the console to start the game.");
      var input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "))
      if (input !=null){
        console.log( "You decided to play " + input + " rounds!");
      } 
    }

    var items = ["rock", "paper", "scissors"];

      function playerOne() {  
        let player = prompt("Please select one item: Rock, paper, or scissor.");      
          if (player.toLowerCase() !=null){
            return  "Player one selected " + player +"!"; 
          } 
      } 

      function computer() {
        var number = Math.floor(Math.random() * items.length); 
        var cChoice = items[number].toLowerCase();
          return  "Computer selected " + cChoice +"!"; 
      }

    
    /*var input;
    var rounds = 0;
    var count = 0;
    var playerScore = 0;
    var computerScore = 0;
    var won;
    var loss;
    var tie; */
  
  
    //console.log("Player selected " + p1ayer + " and computer selected " + cp +"!");

    function playGame(){
      gameIntro();
      playerOne();
      computer();

      
      
      /*if (player === items[0] && cp === items[0]|| 
              player === items[1] && cp === items[1]||
              player === items[2] && cp === items[2]) {
                return ("Result: tie");
                console.log( "hit");
          }   
          
            else if (player === items[1] && cp === items[3]|| 
                  player === items[2] && cp === items[1]||
                  player === items[3] && cp === items[2]) {
            {
              console.log( "tea");
                  return("Result: Player One won!");         
            }
            }else {
                  //return ("Result: The computer won!"); 
      }  
      console.log( "tom");*/
    } 


   
  
        
