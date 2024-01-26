const game = ["rock", "paper", "sissors"];

//function for random computer answers
function computer(){
    var random = game[Math.floor(Math.random()* game.length)];
    return random;
}

const computerInput = computer();

//define score

computerScore = 0;
playerScore = 0;

//function wins, loss, tie
function playRound(playerSelection, computerInput){
    if (playerSelection === "rock" && computerInput === "sissors"){
        console.log("player wins");
        console.log(playerSelection);
        console.log(computerInput);
        playerScore++;
    } else if (playerSelection === "sissors" && computerInput === "paper"){
        console.log("player wins");
        console.log(playerSelection);
        console.log(computerInput);
        playerScore++;
    } else if (playerSelection === "paper" && computerInput === "rock"){
        console.log("player wins");
        console.log(playerSelection);
        console.log(computerInput);
        playerScore++;
    } else if (playerSelection === "sissors" && computerInput === "rock"){
        console.log("computer wins");
        console.log(playerSelection);
        console.log(computerInput);
        computerScore++;
    } else if (playerSelection === "rock" && computerInput === "paper"){
        console.log("computer wins");
        console.log(playerSelection);
        console.log(computerInput);
        computerScore++;
    } else if (playerSelection === "paper" && computerInput === "sissors"){
        console.log("computer wins");
        console.log(playerSelection);
        console.log(computerInput);
        computerScore++;
    } else if (playerSelection=== "rock" && computerInput === "rock"){ 
        console.log("its a tie!");
        console.log(playerSelection);
        console.log(computerInput);
        computerScore++;
    } else if (playerSelection === "sissors" && computerInput === "sissors"){ 
        console.log("its a tie!");
        console.log(playerSelection);
        console.log(computerInput);
        computerScore++;
    } else if (playerSelection === "paper" && computerInput === "paper"){ 
        console.log("its a tie!");
        console.log(playerSelection);
        console.log(computerInput);
    } else {
        console.log(playerSelection);
        console.log(computerInput);
    }
    
    
}

//generate 5 rounds 
function playGame(){
   for (let x = 0; x < 5; x++){
    const playerSelection = prompt("Rock, paper, or sissors");
    playRound(playerSelection, computerInput);
    
    
   }
    
}

//play game
playGame();
console.log("Computer's score is: " + computerScore);
console.log("Player's score is: " + playerScore);