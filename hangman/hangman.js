class Hangman {
	constructor(word, remainingGuesses) {
		this.word = word.toLowerCase().split('');
		this.remainingGuesses = remainingGuesses;
		this.guessedLetters = [];
		this.status = 'playing';
	}
	getPuzzle() {
		let puzzle = '';
		this.word.forEach((letter) => {
			if (this.guessedLetters.includes(letter) || letter === ' ') {
				puzzle += letter;
			} else {
				puzzle += '*';
			}
		});

		return puzzle;
	}
	makeGuess(guess) {
		guess = guess.toLowerCase();
		const isUnique = !this.guessedLetters.includes(guess);
		if (this.status === 'playing') {
			if (isUnique) {
				this.guessedLetters.push(guess);
			}

			if (isUnique && !this.word.includes(guess)) {
				this.remainingGuesses--;
			}
			this.getStatus();
		}
	}
	getStatus() {
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
	}
	getMessage() {
		if (this.status === 'failed') {
			return `Nice try! The word was "${this.word.join('')}".`;
		} else if (this.status === 'finished') {
			return `Great work! You guessed the word.`;
		} else {
			return `Guesses left: ${this.remainingGuesses}`;
		}
	}
}
