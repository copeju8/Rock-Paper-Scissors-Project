   
      
    
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
    var player;
    var comp;

      function playerOne() {  
        let player = prompt("Please select one item: rock, paper, or scissor.");      
          if (player.toLowerCase() !=null){
            return  player;
          } 
        }    
     function computer() {
        var num = Math.floor(Math.random() * items.length); 
        var comp = items[num].toLowerCase();
          return comp;
        }
         
    
      function compare (choice1, choice2) {   
        //var tie = [];
        
        if(choice1 === choice2){
            return "The choice is a tie";
        }
        else if(choice1 === "rock"){

              if(choice2 = "scissors"){

                return "rock wins!"
              }
                else{
                  return "paper wins"
        }
        
        }
        else if(choice2 ==="paper"){
                if(choice2 ==="rock"){
                    return"Paper wins!";
                }    
                else {
                    return "scissors wins";
                }


        }  
      }   
    
      
       
       



    /*

    Winner: rock and scissors, rock wins
            scissors and paper, scissors wins
            paper and rock, paper wins

    
            
    /*

    /*var input;
    var rounds = 0;
    var count = 0;
    var playerScore = 0;
    var computerScore = 0;
    var won;
    var loss;
    var tie; */
 

    function playGame(){
      var start = gameIntro();
      var rounds = 0;
      alert("You and the computer are playing " + start + " rounds.")
      alert("You go first!");

     
          
          console.log("Round: " + rounds++);
          var player = playerOne();
          //let player = prompt("Please select one item: rock, paper, or scissor.");  
          var p1 = player;
          var comp = computer();
          var cp = comp;
          console.log("You selected " + p1 + " and Computer selected " + cp +"!"); 
          var result =  compare(p1, cp);
          
          console.log(result);
      
    




      /*var p1 = playerOne();
      var cp = computer();
      alert(p1);
      winner();*/
      
      /*if (p1 === items && computer === items){ /*|| 
              p1 === items && cp === items||
              p1 === items && cp === items) 
                return("Result: It is a tie!"); 
                
          }   
          
           /* else if (player === items[1] && cp === items[3]|| 
                  p1 === items[2] && cp === items[1]||
                  p1 === items[3] && cp === items[2]) {
            {
              console.log( "tea");
                  return("Result: Player One won!");         
            }
            }else {
                  //return ("Result: The computer won!"); 
      }  
      console.log( "tom");*/
    } 
  
