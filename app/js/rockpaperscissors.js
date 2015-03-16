////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = move || getInput()
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay()
    return move;
}

function getWinner(playerMove,computerMove) {
     var winner;
    var winner;
    if (playerMove === computerMove) { winner = "tie"}
    else if (playerMove === "rock" && computerMove === "scissors") { winner = "player" }
    else if (playerMove === "paper" && computerMove === "rock") { winner = "player" }
    else if (playerMove === "scissors" && computerMove === "paper") { winner = "player" }
    else {winner = "computer"}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
     while (playerWins < 5 && computerWins < 5) {
    while (playerWins < 5 && computerWins < 5)
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === "player") { playerWins += 1 }
        if (winner === "computer") { computerWins += 1 }
        else {}
        console.log("Player chose " + playerMove + " and computer chose " + computerMove + ".");
        console.log("Score is " + playerWins + " - " + computerWins);
    return [playerWins, computerWins];}
}

