function gameIntro() {
    window.onload=gameIntro;
    alert("Welcome to Rock paper scissors game! \nStart the game by opening the console (Press F12)\nNext and running the playGame().");
    let input = parseInt(prompt("How many round of Rock, Paper, Scissors do you want to play?:  "));
      return input;

    console.log(`"We are playing" ${input} "rounds."`);
  }
  
  var items = ["rock", "paper", "scissors"];

console.log(items);

  function computer() {
      var number = Math.floor(Math.random() * items.length); 
      var random_computerChoice = items[number].toLowerCase();
        return random_computerChoice; 
  };

  function playerOne() {  
    var player = prompt("Please select one item: Rock, paper, or scissor.");
      return player;
  }; 

  let playGame = () => {
    gameIntro()
    var result = console.log("Player one selected " + playerOne() + " and " + "the computer selected " + computer());

    /*var win = 0;
    var loss = 0;
    var tie = 0;
    for(i = 0; i < input.length; i++)*/
    
    switch(result) {
        case 1:
          playerOne === computer
          console.log("Result: It'a tie!");
          break;
        case 2:
          playerOne === items[1] && computer === items[3]|| 
          playerOne === items[2] && computer === items[1]||
          playerOne === items[3] && computer === items[2]
          console.log("Result: Player One Wins!");
            break;

         default:
          console.log("Result: Player Two Wins!");
    }


      /*if(playerOne === computer) {
             return "Result: It'a tie!";
          
      }else if (playerOne === items[1] && computer === items[3]|| 
                playerOne === items[2] && computer === items[1]||
                playerOne === items[3] && computer === items[2]) {
                 return "Result: Player One Wins!";
               
      } else {
          return"Result: Player Two Wins!";
      }*/
  };

