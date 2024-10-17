let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3);
    switch (pick) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}



function getHumanChoice() {
    word = prompt("rock paper or scissors")
    return word
}


function playRound(getComputerChoice, getHumanChoice) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice == "rock" && computerChoice == "rock") {
        return "its a tie";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        playerScore++;
        return "you won";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "you lost";
    }

    if (humanChoice == "paper" && computerChoice == "paper") {
        return "its a tie";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        playerScore++;
        return "you won";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "you lost";
    } 

    if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "its a tie";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        playerScore++;
        return "you won";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "you lost";
    }
}



function playgame(playRound) {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice, getHumanChoice));
    }
    
}

playgame(playRound)

// console.log(playRound(getComputerChoice, getHumanChoice))


// playgame(playRound);

console.log(`your score was ${playerScore}`)
console.log(`computer score was ${computerScore}`)