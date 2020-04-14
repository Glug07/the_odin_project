function randomizeValue(smallestValue, biggestValue) { // biggestValue exclude from possibilities
    let randomValue = Math.random() * (biggestValue - smallestValue);
    randomValue = Math.floor(randomValue) + smallestValue;
    return (randomValue);
}

function computerPlay() {
    let randomValue = randomizeValue(0, 3);
    switch (randomValue) {
        case 0:
            return ("rock");
            break;
        case 1:
            return ("paper")
            break;
        case 2:
            return ("scissors")
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors")
        return ("You Won! Rock beats scissors");
    if (playerSelection === "rock" && computerSelection === "paper")
        return ("You Lost! Paper beats rock");
    if (playerSelection === "rock" && computerSelection === "rock")
        return ("Draw !!! REMATCH");
    if (playerSelection === "paper" && computerSelection === "rock")
        return ("You Won! Rock beats scissors");
    if (playerSelection === "paper" && computerSelection === "scissors")
        return ("You Lost! Paper beats rock");
    if (playerSelection === "paper" && computerSelection === "paper")
        return ("Draw !!! REMATCH");
    if (playerSelection === "scissors" && computerSelection === "paper")
        return ("You Won! Rock beats scissors");
    if (playerSelection === "scissors" && computerSelection === "rock")
        return ("You Lost! Paper beats rock");
    if (playerSelection === "scissors" && computerSelection === "scissors")
        return ("Draw !!! REMATCH");
}

let playerScore = 0;
let computerScore = 0;
let finalText = "";
let roundNumber = 5;
let actualRound = 0;

window.addEventListener('click', function (e) {
    let targetElement = e.target || e.srcElement;
    let elementValue = targetElement.getAttribute("value");
    if (elementValue == null)
        return;
    let displayText = playRound(elementValue, computerPlay());
    const paraRoundScore = document.getElementById("para-round-score");
    paraRoundScore.textContent = displayText;
    if (displayText === "You Won! Rock beats scissors")
        playerScore += 1;
    else if (displayText === "You Lost! Paper beats rock")
        computerScore += 1;
    actualRound++;
    if (actualRound >= roundNumber) {
        if (playerScore > computerScore)
            finalText = "You won! good player";
        else if (playerScore < computerScore)
            finalText = "You lost! good computer";
        else
            finalText = "Draw the fuck all bad";
        const paraFinalScore = document.getElementById("para-final-score");
        paraFinalScore.textContent = finalText;
    }
});