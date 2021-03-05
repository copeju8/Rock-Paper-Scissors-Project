function gameIntro() {
    window.onload=gameIntro;
    alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
    var input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "))
    
      if (input !=null){
        return "You decided to play " + input +" rounds!";
      } 
  }
 
  

 function playerOne() {  
    var player = prompt("Please select one item: Rock, paper, or scissor.");
    var pChoice = player.toLowerCase();
      if (pChoice !=null){
        return  "Player one selected " + pChoice +"!"; 
      } 
  }; 

 function computer() {
    var number = Math.floor(Math.random() * items.length); 
    var cChoice = items[number].toLowerCase();
      return  "computer selected " + cChoice +"!"; 
};



 

function playGame(playerOne, computer) { 

  var items = ["rock", "paper", "scissors"];
  let i;
  counter = 0;
  var won;
  var loss;
  var tie;

      gameIntro();
      var playerOne = prompt("Please select one item: Rock, paper, or scissor.");
      console.log("Player one selected " + playerOne +"!");
      
      
        var number = Math.floor(Math.random() * items.length); 
        var computer = items[number].toLowerCase();
         console.log("The computer selected " + computer +"!"); 
 
    if(playerOne == computer) {
          return ("Result: tie");
    }   
    
    else if (playerOne === items[1] && computer === items[3]|| 
             playerOne === items[2] && computer === items[1]||
             playerOne === items[3] && computer === items[2]) {
    {
            return("Result: Player One won!");         
    }
    }else {
               return ("Result: The computer won!");
    }
  } 
  



    /*
      if(p === c) {
             return "Result: It'a tie!";
          
      }else if (p === items[1] && c === items[3]|| 
                p === items[2] && c === items[1]||
                p === items[3] && c === items[2]) {
                 return "Result: Player One Wins!";
      }else if (c === items[1] && p === items[3]|| 
                c === items[2] && p === items[1]||
                c === items[3] && p === items[2]) {
                   return "Result: c Wins!";       
      } else {
          return"Result: Player Two Wins!";
      }
  };*/

 
  /*var playerOne = prompt("Please select one item: Rock, paper, or scissor.");
  var userScore = 0;
  var cScore = 0;
  var p = 
  const userScore_span = document.getElementById("user-score");
  const cScore_span = document.getElementById("c-score");
  const scoreBoard_div = document.querySelector(".score-board");
  
  function win(user, c) {
    userScore = userScore + 1;
    userScore_span.innerHTML = userScore;
    cScore_span.innerHTML = cScore;
    return(user);
    return(c);
    return(win);
  }
  
  function lose(user, c) {
    cScore = cScore + 1;
    userScore_span.innerHTML = userScore;
    cScore_span.innerHTML = cScore;
    return(user);
    return(c);
    return(lose);
  } {
    if (playerOne == 1) {
      playerOne = "Rock";
    } else if (playerOne == 2) {
      playerOne = "Paper";
    } else if (playerOne == 3) {
      playerOne = "Scissors";
    } else {
      alert("Error, press F5");
    }
  
  
    alert("You choose: " + playerOne);
  
    return(playerOne);
  
    //c choice
    var c = Math.random();
    if (c < 0.33) {
      c = "Rock"
    } else if (c < 0.66) {
      c = "Paper";
    } else {
      c = "Scissors";
  
  
    }
    alert("c choose: " + c);
  
    return(c);
  }*/
  /*
  if (playerOne === "Rock" && computer === "Scissors") {
    alert("Rock crushes scissors.You Win!");
    win(playerOne, computer);
  
  
  } else if (playerOne === "Rock" && computer=== "Paper") {
    alert("Paper covers rock. You lose!");
    lose(playerOne, computer);
  
  } else if (playerOne === "Paper" && computer === "Rock") {
    alert("Paper covers rock. You win!");
    win(playerOne, computer);
  
  
  
  } else if (playerOne === "Paper" && computer === "Scissors") {
    //scissors
    alert("Scissors cuts paper. You lose!");
    lose(playerOne, computer);
  
  } else if (playerOne === "Scissors" && computer === "Rock") {
    alert("Rock crushes scissors. You lose!");
    lose(playerOne, computer);
  
  } else if (playerOne === "Scissors" && computer === "Paper") {
    alert("Scissors cuts paper. You win!");
    win(playerOne, computer);
  
  } else if (playerOne == computer) {
    alert("It's a tie!")
  }

  //gameIntro();
 // c();
  //p();

  //return("Player one selected " + p() + " and " + "the c selected " + c());
*/
