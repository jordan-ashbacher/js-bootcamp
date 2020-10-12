const game1 = new Hangman('Cat', 2);
document.querySelector('#puzzle').textContent = game1.getPuzzle();
document.querySelector('#guesses').textContent = game1.remainingGuesses;

window.addEventListener('keypress', function(e) {
	const guess = e.key;
	game1.makeGuess(guess);
	generateGameDOM();
	console.log(game1.status);
});

const generateGameDOM = function() {
	document.querySelector('#puzzle').textContent = game1.getPuzzle();
	document.querySelector('#guesses').textContent = game1.remainingGuesses;
};
