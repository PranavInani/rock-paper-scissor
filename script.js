function getComputerChoice() {
    return Math.floor(Math.random()*3);

}
function getHumanChoice() {
    while (true) {
        choice = prompt("Rock, Paper or Scissor??").toLowerCase()
        switch (choice) {
            case "rock":
                return 0;
            case "paper":
                return 1;
            case "scissor":
                return 2;
            default:
                console.log("Enter Valid Move!")
                break;
    }
    }
    
}


function playRound() {
    const humanSel = getHumanChoice();
    const compSel = getComputerChoice();
    
    whoWon = (compSel - humanSel + 3) % 3;
    const choice = ["Rock", "Paper", "Scissor"];
    console.log(choice[humanSel] + " vs " + choice[compSel]); 

    return whoWon;
}

function playGame(){
    let humanScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++){
        Win = playRound();
        if(Win == 2){
            console.log("You Win!!");
            humanScore+=1;
        }
        else if (Win == 1){
            console.log("You Lose!!");
            compScore+=1;
        }
        else {
            console.log("It's a Draw!!");
        }
        console.log("Current Score - You: " + humanScore + " Computer: " + compScore);
    }

    if (humanScore > compScore){
        return "You Won!!!";
    }
    else if(humanScore < compScore){
        return "You Lost!!!";
    }
    else {
        return "It's a Draw!!!";
    }
}




