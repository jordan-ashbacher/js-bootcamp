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

getPuzzle('2').then(
	(puzzle) => {
		console.log(puzzle);
	},
	(err) => {
		console.log(`Error: ${err}`);
	}
);

getCountry('MX').then(
	(country) => {
		console.log(country.name);
	},
	(err) => {
		console.log(`Error: ${err}`);
	}
);
