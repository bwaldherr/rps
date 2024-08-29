const game = ["rock", "paper", "scissors"];
const display = document.querySelector("#display");
const options = document.querySelectorAll("#options")


let playerScore = 0;
let compScore = 0;

//function wins, loss, tie
function playRound(pInput, computerInput){
    if (pInput === 'rock' && computerInput === "scissors"){
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;
        playerScore++;
    
    } else if (pInput === 'scissors' && computerInput === "paper"){
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;        
        playerScore++;

    } else if (pInput === 'paper' && computerInput === "rock"){
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;        
        playerScore++;

    } else if (pInput === 'scissors' && computerInput === "rock"){
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;       
        compScore++;

    } else if (pInput === 'rock' && computerInput === "paper"){
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;       
        compScore++;

    } else if (pInput === 'paper' && computerInput === "scissors"){
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;        
        compScore++;

    } else if (pInput=== 'rock' && computerInput === "rock"){ 
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;
    
    } else if (pInput === 'scissors' && computerInput === "scissors"){ 
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;
      
    } else if (pInput === 'paper' && computerInput === "paper"){ 
        display.textContent = "Player: " +  pInput + " | " + " Computer: " + computerInput;
       
    } 
};

function displayScore(){

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("comp").textContent = compScore;
    
}

function reset(){
    playerScore = 0;
    compScore = 0;
}

function winner(){
    cwinner = document.getElementById("cwinner");
    pwinner = document.getElementById("pwinner");
    if (compScore == 10){
        cwinner.style.display = "block";
        reset();
    }
    else if(playerScore == 10){
        pwinner.style.display = "block";
        reset();
    }
    else{
        cwinner.style.display = "none";
        pwinner.style.display = "none";
    }
    
    }


    
    



//making the buttons functional
options.forEach((option) => {
    option.addEventListener("click", function(){
        
        const pInput =this.textContent;
        const game = ["rock", "paper", "scissors"];
        const computerInput = cInput = game[Math.floor(Math.random() * 3)];
        playRound(pInput,computerInput);
        displayScore();
        winner();
    
    })

})












