const Hangman = function(word, remainingGuesses) {
	this.word = word.toLowerCase().split('');
	this.remainingGuesses = remainingGuesses;
	this.guessedLetters = [];
};

Hangman.prototype.getPuzzle = function() {
	let puzzle = '';
	this.word.forEach((letter) => {
		if (this.guessedLetters.includes(letter) || letter === ' ') {
			puzzle += letter;
		} else {
			puzzle += '*';
		}
	});

	return puzzle;
};

Hangman.prototype.makeGuess = function(guess) {
	guess = guess.toLowerCase();
	const isUnique = !this.guessedLetters.includes(guess);

	if (isUnique) {
		this.guessedLetters.push(guess);
	}

	if (isUnique && !this.word.includes(guess)) {
		this.remainingGuesses--;
	}
};

const game1 = new Hangman('Cat', 2);
const game2 = new Hangman('New Jersey', 4);

console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener('keypress', function(e) {
	const guess = e.key;
	game1.makeGuess(guess);
	console.log(game1.getPuzzle());
	console.log(game1.remainingGuesses);
});