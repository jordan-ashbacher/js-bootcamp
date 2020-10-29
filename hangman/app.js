const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#message');
const game1 = new Hangman('Cat', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
	const guess = e.key;
	game1.makeGuess(guess);
	generateGameDOM();
});

const generateGameDOM = function() {
	document.querySelector('#puzzle').textContent = game1.puzzle;
	document.querySelector('#message').textContent = game1.statusMessage;
};

getPuzzle((error, puzzle) => {
	if (error) {
		console.log(`Error: ${error}`);
	} else {
		console.log(puzzle);
	}
});

getCountry('US', (error, country) => {
	if (error) {
		console.log(error);
	} else {
		console.log(`${country.name}`);
	}
});
