console.log('Hello world!');

function computerGame(){
    const choiceNumber = Math.floor(Math.random() * 3) + 1
    let weapon = '';
    if(choiceNumber === 1) {
        weapon = 'ROCK';
    } else if (choiceNumber === 2) {
        weapon = 'PAPER';
    } else {
        weapon = 'SCISSORS';
    }
    console.log(choiceNumber);
    return weapon;
}

