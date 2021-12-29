const weapons = ['Rock', 'Paper', 'Scissors'];

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const computerWeapon = document.querySelector('#computer-weapon');
const playerWeapon = document.querySelector('#player-weapon');
const roundWinner = document.querySelector('.winner');

let playerScoreCount = 0;
let computerScoreCount = 0;


function computerGame(){
    const choiceNumber = Math.floor(Math.random() * 3)
    return weapons[choiceNumber];
}

function changeWeaponIcon(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    computerWeapon.src = `images/${computerSelection}.png`;
    playerWeapon.src = `images/${playerSelection}.png`;    
}

function endGame(winner){
    winner = winner.charAt(0).toUpperCase() + winner.slice(1).toLowerCase();
    alert(`${winner} wins the game!`);
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.innerText = playerScoreCount;
    computerScore.innerText = computerScoreCount;
    computerWeapon.src = `images/question.png`;
    playerWeapon.src = `images/question.png`;   
}

function restartGame(){
    if(playerScoreCount === 0 && computerScoreCount === 0){
        return;
    } else {
        playerScoreCount = 0;
        computerScoreCount = 0;
        playerScore.innerText = playerScoreCount;
        computerScore.innerText = computerScoreCount;
        computerWeapon.src = `images/question.png`;
        playerWeapon.src = `images/question.png`; 
        alert(`The game has been restarted`);
    }
    
}

function activeWeapon(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    PlayerWeapons = document.querySelectorAll('.weapon');
    console.log(PlayerWeapons);
    PlayerWeapons.forEach(weapon => {
        console.log(weapon);
        console.log(weapon.value + ' ' + playerSelection);
        if(weapon.value === playerSelection){
            weapon.classList.add('active');
        } else {
            weapon.classList.remove('active');
        } 
    });
    ComputerWeapons = document.querySelectorAll('.computer-weapon');
    ComputerWeapons.forEach(weapon => {
        if(weapon.value === computerSelection){
            weapon.classList.add('active');
        } else {
            weapon.classList.remove('active');
        } 
    });
}

function playRound(playerSelection, computerSelection){
    if(playerScoreCount === 5 || computerScoreCount === 5){
        return;
    }
    playerSelection = this.value;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerGame();
    computerSelection = computerSelection.toUpperCase();
    let winner;
    console.log(`player: ${playerSelection} - ${computerSelection} :computer`);
    changeWeaponIcon(playerSelection, computerSelection);
    activeWeapon(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        winner = 'draw';
    } else {
        if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
            playerScoreCount += 1;
            playerScore.innerText = playerScoreCount;
            winner = 'player';
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
            playerScoreCount += 1;
            playerScore.innerText = playerScoreCount;
            winner = 'player';
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
            playerScoreCount += 1;
            playerScore.innerText = playerScoreCount;
            winner = 'player';
        } else {
            computerScoreCount += 1;
            computerScore.innerText = computerScoreCount;
            winner = 'computer';
        }
    }
    if(winner === 'draw'){
        roundWinner.innerText = 'Draw!';
    } else {
        roundWinner.innerText = `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins this round!`;
    }
    if(playerScoreCount === 5 || computerScoreCount === 5){
        if(playerScoreCount > computerScoreCount){
            winner = 'player';
            endGame(winner);
        } else {
            winner = 'computer';
            endGame(winner);
        }
    }
}

function game(){
    const buttons = document.querySelectorAll('.weapon');
    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    });
    const restart = document.querySelector('.restart');
    restart.addEventListener('click', restartGame);
}

game();