
let userScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");
const playerIcon = document.getElementById("playerIcon");
const compIcon = document.getElementById("comp");
const message = document.getElementById("message");


function computerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let choice;
    if(randomNum == 0){
        choice = "rock"
        compIcon.style.backgroundColor = "red";
        compIcon.textContent = "✊";

    }else if(randomNum == 1){
        choice = "paper";
        compIcon.style.backgroundColor = "blue";
        compIcon.textContent = "🖐️";

    }else{
        choice = "scissors"
        compIcon.style.backgroundColor = "yellowgreen";
        compIcon.textContent = "✌️";

    }
    
    return choice;
}

function getUserChoice(){
    const choice = prompt("enter choice")
    return choice;
}

function playGame(uChoice, cChoice){
    
    if(uChoice != cChoice){
        if((uChoice == "rock" && cChoice == "scissors") ||(uChoice == "paper" && cChoice == "rock")||(uChoice == "scissors" && cChoice == "paper")){
            message.textContent = "you Win!!!!";
            message.style.backgroundColor = "green";
            userScore += 1;
        }else{
            message.textContent = "you Lose!!!!";
            message.style.backgroundColor = "red";
            computerScore += 1;
        }
    }else{
        message.textContent = "you Drew!!!!";
        message.style.backgroundColor = "yellow";    }
    
    console.log("player: "+ userScore + ' ' +"computer: "+ computerScore)

}
rockButton.addEventListener("click", event =>{
    const choice = "rock";
    playerIcon.style.backgroundColor = "red";
    playerIcon.textContent = "✊";
    playGame(choice, computerChoice());
});

paperButton.addEventListener("click", event =>{
    const choice = "paper";
    playerIcon.style.backgroundColor = "blue";
    playerIcon.textContent = "🖐️";
    playGame(choice, computerChoice());

});

scissorButton.addEventListener("click", event =>{
    const choice = "scissors";
    playerIcon.style.backgroundColor = "yellowgreen";
    playerIcon.textContent = "✌️";
    playGame(choice, computerChoice());

});
