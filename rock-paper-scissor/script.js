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
let userChoice;
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
        return "It's a tie!";
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        score.computer++;
        return "Computer wins!";
    } else {
        score.user++;
        return "User wins!";
    }
}
for(let i = 0; i < 5; i++){
    computerChoice = comChoice();
    userChoice = userInput();
    console.log("computer chose " + computerChoice + " " + compare(computerChoice, userChoice));
}
console.log("Final Score - User: " + score.user + ", Computer: " + score.computer);
if (score.user > score.computer) {
    console.log("User wins the game!");
} else if (score.user < score.computer) {
    console.log("Computer wins the game!");
} else {
    console.log("The game is a tie!");
}
console.log("Thanks for playing!");