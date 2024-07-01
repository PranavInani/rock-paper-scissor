let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('.result');
const score = document.querySelector('.score');
const playerImg = document.querySelector(`#player-choice`);
const computerImg = document.querySelector(`#computer-choice`);
const initialanim = document.querySelector('.initial-anim');
const choicedisplay = document.querySelector('.display');


function getComputerChoice() {
    const Choices = ["rock", "paper", "scissors"];
    return Choices[Math.floor(Math.random()*3)];
}

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("id");
        playGame(playerChoice);
    })
})

playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const res = getWinner(playerChoice, computerChoice);
    display(res, computerChoice, playerChoice);
}

getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

display = (res, computerChoice, playerChoice) => {
    displaychoice(playerChoice, computerChoice);

    if (res === "player") {
        playerScore++;
        updatescore();
        result.textContent = "You Win!";
    }
    else if (res === "computer") {
        computerScore++;
        updatescore();
        result.textContent = "You Lose!";
    }
    else {
        result.textContent = "It's a Draw!";
    }

}

displaychoice = (playerChoice, computerChoice) => {
    initialanim.style.display = "none";
    choicedisplay.style.display = "flex";
    playerImg.src = `./images/${playerChoice}.png`;
    computerImg.src = `./images/${computerChoice}.png`;

}    

updatescore = () => {
    score.textContent = ` ${playerScore} : ${computerScore}`;
}

const reset = document.querySelector('.reset');
reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updatescore();
    result.textContent = "May You Win!";
    initialanim.style.display = "flex";
    choicedisplay.style.display = "none";
})