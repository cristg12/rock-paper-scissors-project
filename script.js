function getComputerChoice  () {
    const option = ["rock", "paper", "scissors"]
    return  option[Math.floor(Math.random() * option.length)]
    
 };
 let computerSelection = getComputerChoice();

const playerSelection = "rock";

function playRound (playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "You tie!";

    } else if (playerSelection !== computerSelection && computerSelection === "paper"){
        return "You loose!";
    } else {
        return "You win!";
  
    }
};


function playGame () {
    let result = 0;
    let playerWins = 0;
    let computerWins = 0;

    while (result < 5) {
        computerSelection = getComputerChoice()
        if(playRound (playerSelection, computerSelection) === "You win!"){
            playerWins += 1;
        } else if (playRound(playerSelection, computerSelection) === "You loose!") {
            computerWins += 1;
        }
        
        result++;
    }

    if(playerWins >= 3 && computerWins <=2){
        console.log("player wins!")
        
    } else if (computerWins >= 3 && playerWins <= 2) {
        console.log ("computer wins")
    }

    console.log(playerWins);
        console.log(computerWins)
    return result;
   
}

let result = playGame();




console.log(playRound(playerSelection, computerSelection))