// Computer choice
function getComputerChoice() {
    return numberToStr(Math.floor(Math.random() * 3));
}

// Human choice
function getHumanChoice() {
    return prompt("Elija una opción:\n- Rock \n- Paper \n- Scrissors").toLowerCase();
}

// Score
let humanScore = 0;
let computerScore = 0;
let round = 0

// round
function playRound(humanChoice, computerChoice) {
    console.log(`round: ${++round}`);
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    if (humanChoice === computerChoice) return "Tied";
    else if (winCondition(humanChoice, computerChoice)) {
        humanScore++;
        return "You win";
    } else {
        computerScore++;
        return "You lose";
    }
}

function displayRound() {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(humanScore);
    console.log(computerScore);
}
// convert number to rock paper scrissor
function numberToStr(choice) {
    switch (choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scrissors";
            break;
    }
    return choice;
}

// win condition
function winCondition(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scrissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scrissors" && computerChoice === "paper") return true;
    else return false;
}

// play game
function playGame() {
    for (let i = 0; i < 5; i++) {
        displayRound();
    }
    return (humanScore > computerScore) ? "Human Win" : "Computer Win";
}

console.log(playGame());