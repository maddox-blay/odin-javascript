
let userScore = 0;
let computerScore = 0;

function computerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let choice;
    if(randomNum == 0){
        choice = "rock"
    }else if(randomNum == 1){
        choice = "paper";
    }else{
        choice = "scissors"
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
            console.log("you Win!!!");
            userScore += 1;
        }else{
            console.log("you Lose!!!")
            computerScore += 1;
        }
    }else{
        console.log("draw")
    }
    
    console.log("player: "+ userScore + ' ' +"computer: "+ computerScore)

}

for(let i = 1; i <= 5; i++){
    playGame(getUserChoice(), computerChoice());
}