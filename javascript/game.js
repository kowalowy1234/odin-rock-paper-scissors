const weapons = ['Rock', 'Paper', 'Scissors'];

function computerGame(){
    const choiceNumber = Math.floor(Math.random() * 3)
    return weapons[choiceNumber];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let winner;
    console.log(`player: ${playerSelection} - ${computerSelection} :computer`);
    if (playerSelection === computerSelection) {
        winner = 0;
    } else {
        if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
            winner = 1;
        } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
            winner = 1;
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
            winner = 1;
        } else {
            winner = 2;
        }
    }
    return winner;
}



playRound(playerSelection, computerSelection);