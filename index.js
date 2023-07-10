function getComputerChoice () {

    let choiceList = ["rock","paper","scissor"];
    const random = Math.floor(Math.random() * choiceList.length);

    return choiceList[random];
}

function playRound (playerSelection,computerSelection) {

    let result;

    // Case insensitive
    playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection == "scissor" || playerSelection === "paper" && computerSelection == "rock" || playerSelection === "scissor" && computerSelection == "paper") {
        result = `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        result = `This is a draw! You both selected: ${playerSelection}`
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

function game() {

    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i <5; i++) {
        // If no value entered, rock is selected by default
        let playerSelection = prompt("Choose between rock paper & scissor :","rock");

        let result = playRound(playerSelection,getComputerChoice());

        if (result.includes("win")) {
            playerWin++;
        } else if (result.includes("lose")) {
            computerWin++;
        }

        console.log(result);
    }

    if (playerWin > computerWin) {
        console.log("You win the game with " + playerWin + " rounds won.");
    } else {
        console.log("You lost the game. Computer win with "  + computerWin + " rounds won." )
    }
}
