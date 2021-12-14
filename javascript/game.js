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

function game(){
    let playerSelection;
    let computerSelection;

    console.log('Let\'s play a game of ROCK-PAPER-SCISSORS!');
    console.log('First to 5 points wins...');

    let playerScore = 0;
    let computerScore = 0;

    let round = 0;
    let roundWinner;

    while(round < 5) {
        playerSelection = prompt('Write either \'Rock\',  \'Paper\' or \'Scissors\'');
        if (playerSelection === null){
            console.log('Oh come on... Play it!');
            break;
        } else {
            computerSelection = computerGame();
            roundWinner = playRound(playerSelection, computerSelection);
            
            if (roundWinner === 1) {
                playerScore += 1;
                console.log('Player wins this round!')
                console.log(`player Score: ${playerScore} - ${computerScore} :computer Score`);
            } else if (roundWinner === 2) {
                computerScore += 1;
                console.log('Computer wins this round!')
                console.log(`player Score: ${playerScore} - ${computerScore} :computer Score`);
            } else {
                console.log('Looks like this one\'s a draw!')
                console.log(`player Score: ${playerScore} - ${computerScore} :computer Score`);
            }
            round += 1;
        }
    }
    
    if (playerScore === computerScore) {
        console.log('DRAW')
    } else {
        (playerScore > computerScore) ? console.log('PLAYER WINS!!!') : console.log('COMPUTER WINS!!!');
    }
    
}

game();