
let userScore = 0;
let computerScore = 0;
let roundCount = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");
const playerIcon = document.getElementById("playerIcon");
const compIcon = document.getElementById("comp");
const message = document.getElementById("message");
const Round = document.getElementById("round");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");


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

function endgame(){
    if(userScore == 5 || computerScore == 5){
        if(userScore == 5){
            alert("you won, yayy");
        }else{
            alert("computer won, 🗿🗿🗿🗿");
        }
        userScore = 0;
        computerScore = 0;
        roundCount = 0;

        Round.textContent = "Round : " + roundCount;
        pScore.textContent = "score : " + userScore;
        cScore.textContent = "score : " + computerScore;
    }
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
    roundCount += 1;
    Round.textContent = "Round : " + roundCount;
    pScore.textContent = "score : " + userScore;
    cScore.textContent = "score : " + computerScore;

    endgame();
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
