let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

let getGuess = function(guess) {
	console.log(`Guess is ${guess}. Answer is ${randomNum}.`);
	return guess == randomNum;
};

console.log(getGuess(3));
