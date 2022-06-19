const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout,
})
let numAttempts = 5;
function askGuess (answer) {
   rl.question('Enter a guess : ', (guess) => {
    let res = checkGuess(Number(guess));
    numAttempts--
    if(!res) {
        askGuess();
    } else return rl.close();
   })
}

let secretNumber = randomInRange(0, 100);
function checkGuess (num) {
    if(numAttempts === 0) {
        console.log('You loose');
        return true;
    }
    if(num > secretNumber) {
        console.log('Too high!')
        return false;
    } else if(num < secretNumber) {
        console.log('Too Low!');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function randomInRange (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function askRange () {
    rl.question('Enter a minimum number : ', (min) => {
        rl.question('Enter a maximum number : ', (max) => {
            console.log(`I'm thinking of a number between ${min} and ${max}`)
            secretNumber = randomInRange(min, max);
            askGuess();
        } )
    })
}
function askLimit () {
    rl.question('Enter limit : ' , (limit) => {
        numAttempts = Number(limit);
        askRange();
    })
}
askLimit();
