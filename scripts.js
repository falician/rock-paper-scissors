function computerPlay(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function playerPlay(items) {
    return items[Math.floor(Math.random()*items.length)];
}

var items = ["rock", "paper", "scissors"];

let playerSelection = prompt("What shall you choose? Rock, Paper or Scissors!").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Try again! You both chose rock!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Scissors lose to rock!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Rock loses to paper!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Try again! You both chose paper!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Paper loses to scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Try again! You both chose scissors!";
    } else {
        return "Please enter a valid response"
    }

}

const computerSelection = computerPlay(items);
console.log(playRound(playerSelection, computerSelection));
console.log("Your answer:", playerSelection);
console.log("Computer answer:", computerSelection);