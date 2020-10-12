const Hangman = function(word, remainingGuesses) {
	this.word = word.toLowerCase().split('');
	this.remainingGuesses = remainingGuesses;
	this.guessedLetters = [];
	this.status = 'playing';
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

	this.getStatus();
};

Hangman.prototype.getStatus = function() {
	// EVERY SOLUTION
	const finished = this.word.every((letter) => {
		return this.guessedLetters.includes(letter);
	});

	// FILTER SOLUTION
	// const lettersUnguessed = this.word.filter((letter) => {
	// 	return !this.guessedLetters.includes(letter)
	// })

	// const finished = lettersUnguessed.length === 0

	// FOR EACH LOOP SOLUTION
	// let finished = true;

	// this.word.forEach((letter) => {
	// 	if (this.guessedLetters.includes(letter)) {
	// 	} else {
	// 		finished = false;
	// 	}
	// });

	if (this.remainingGuesses === 0) {
		this.status = 'failed';
	} else if (finished) {
		this.status = 'finished';
	} else {
		this.status = 'playing';
	}
};
