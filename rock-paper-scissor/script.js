//computer choice
let computerChoice;
function comChoice(){
    let x = Math.random();
if (x < 0.34) {
    computerChoice = "rock";
} else if (x < 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
return computerChoice;
}
//user choice
let userChoice;
let play = document.getElementById("prompt");
play.onclick = function(){
function userInput(){
    userChoice = prompt("Enter your choice (rock, paper, scissors):");
    return userChoice;
}
let score = {
    user: 0,
    computer: 0
};
function compare(computerChoice, userChoice){
    if (computerChoice === userChoice) {
        alert("It's a tie! You: " + score["user"] + ", Computer: " + score["computer"]);
        return "It's a tie!";
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        score.computer++;
        alert("Computer wins! You: " + score["user"] + ", Computer: " + score["computer"]);
        return "Computer wins!";
    } else if(userChoice!== "rock" && userChoice!== "paper" && userChoice!== "scissors")
    {
        alert("FINE DON'T PLAY!");
        stop();
    }
    else {
        score.user++;
        alert("You win! You: " + score["user"] + ", Computer: " + score["computer"]);
        return "You win!";
    }
}
for(let i = 0; i < 5; i++){
    alert("Round " + (i + 1));
    computerChoice = comChoice();
    userChoice = userInput();
    console.log("computer chose " + computerChoice + " " + "and user chose " + userChoice);
    console.log(compare(computerChoice, userChoice));
}
console.log("Final Score - You: " + score.user + ", Computer: " + score.computer);
if (score.user > score.computer) {
    alert("You win the game!");
    console.log("You win the game!");
} else if (score.user < score.computer) {
    alert("Computer wins!");
    console.log("Computer wins the game!");
} else {
    alert("The game is a tie!");
    console.log("The game is a tie!");
}   
alert("Thanks for playing!");
console.log("Thanks for playing!");
};


let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
rock.onclick = function() {
    userChoice = "rock";
    playGame();
};
paper.onclick = function() {
    userChoice = "paper";
    playGame();
};
scissors.onclick = function() {
    userChoice = "scissors";
    playGame();
};
let scoreyou = 0;
let scorecom = 0;
function comChoice(){
    let x = Math.random();
if (x < 0.34) {
    computerChoice = "rock";
} else if (x < 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
return computerChoice;
}
let answer = document.getElementById("answer");

function playGame(){
    comChoice();
    if (userChoice === computerChoice) {
        answer.innerHTML = "It's a tie! <br>You both chose " + userChoice;
        scoreyou++;
        scorecom++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        answer.innerHTML = "You win! <br>Computer chose " + computerChoice;
        scoreyou++;
    } else {
        answer.innerHTML = "You lose! <br>Computer chose " + computerChoice;
        scorecom++;
    }
    let scorekeeper = document.getElementById("scorekeeper");
    scorekeeper.innerHTML = "You: " + scoreyou + " <br> Computer: " + scorecom;
}