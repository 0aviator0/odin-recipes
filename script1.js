let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userChoice;
let computerChoice;
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
    if (scoreyou === 5) {
        alert("Congratulations! You reached 5 points and won the game!");
        scoreyou = 0;
        scorecom = 0;
        scorekeeper.innerHTML = "You: " + 0 + " <br> Computer: " + 0;
    } else if (scorecom === 5) {
        alert("Game over! The computer reached 5 points and won the game.");
        scoreyou = 0;
        scorecom = 0;
        scorekeeper.innerHTML = "You: " + 0 + " <br> Computer: " + 0;
    } else if (scoreyou === 5 && scorecom === 5) {
        alert("It's a tie! Both you and the computer reached 5 points.");
        scoreyou = 0;
        scorecom = 0;
        scorekeeper.innerHTML = "You: " + 0 + " <br> Computer: " + 0;
    }
}