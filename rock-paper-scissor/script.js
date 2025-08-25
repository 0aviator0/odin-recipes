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
    } else {
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