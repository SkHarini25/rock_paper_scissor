let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-marks");
const computerScore_span = document.getElementById("computer-marks");
const scoreBoard_div=document.querySelector(".score");
const result_p =document.querySelector(".result >p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter){
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
     return "Scissors";
}
function win(userChoice , computerChoice) {
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();userScore++;
    
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML=`${convertToWord(userChoice) }${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord}.  You Win.. :) !`;
    
}
function lose(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML=`${convertToWord(userChoice) }${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord}.  You lost..  :(`;
    
}
function tie(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
   
    result_p.innerHTML=`${convertToWord(userChoice) }${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord}.  It's a tie.. !`;
   
}


function game(userChoice) {
    const  computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            tie(userChoice,computerChoice);
            break;

    }
    
    

   

}



function main(){
    rock_div.addEventListener('click',() =>game("r"));

    paper_div.addEventListener('click', () =>game("p"));

    scissors_div.addEventListener('click',() => game("s"));

} 

main();








