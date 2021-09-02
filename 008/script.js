const hand = document.getElementById('hand');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const compHand = document.getElementById('compHand');
const playerHand = document.getElementById('playerHand');

const resultLabel = document.getElementById('resultLabel');

var playerChoice;

rockButton.addEventListener('click', ()=> {
    playerChoice = 0;
    console.log(playerChoice);
    playerHand.textContent = 'ROCK'
    runGame();
});

paperButton.addEventListener('click', ()=> {
    playerChoice = 1;
    console.log(playerChoice);
    playerHand.textContent = 'PAPER'
    runGame();
});

scissorsButton.addEventListener('click', ()=> {
    playerChoice = 2;
    console.log(playerChoice);
    playerHand.textContent = 'SCISSORS'
    runGame();
});

function runGame(){
    var compChoice = Math.floor(Math.random() * 100) % 3
    switch (compChoice){
        case 0:
            console.log(compChoice);
            compHand.textContent = 'ROCK';
            break;
        case 1:
            console.log(compChoice);
            compHand.textContent = 'PAPER';
            break;
        case 2:
            console.log(compChoice);
            compHand.textContent = 'SCISSORS';
            break;
    }
    if(playerChoice == 0 && compChoice == 0){
        resultLabel.textContent = 'DRAW!';
    }
    if(playerChoice == 1 && compChoice == 1){
        resultLabel.textContent = 'DRAW!';
    }
    if(playerChoice == 2 && compChoice == 2){
        resultLabel.textContent = 'DRAW!';
    }
    if(playerChoice == 0 && compChoice == 1){
        resultLabel.textContent = 'COMPUTER WINS!';
    }
    if(playerChoice == 1 && compChoice == 2){
        resultLabel.textContent = 'COMPUTER WINS!';
    }
    if(playerChoice == 2 && compChoice == 0){
        resultLabel.textContent = 'COMPUTER WINS!';
    }
    if(playerChoice == 1 && compChoice == 0){
        resultLabel.textContent = 'PLAYER WINS!';
    }
    if(playerChoice == 2 && compChoice == 1){
        resultLabel.textContent = 'PLAYER WINS!';
    }
    if(playerChoice == 0 && compChoice == 2){
        resultLabel.textContent = 'PLAYER WINS!';
    }
}
