console.log('Hello world!');

function computerGame(){

    const choiceNumber = Math.floor(Math.random() * 3)
    const weapons = ['Rock', 'Paper', 'Scissors'];
    return weapons[choiceNumber];
}

