const game1 = new Hangman('Cat', 2);
document.querySelector('#puzzle').textContent = game1.getPuzzle();
document.querySelector('#message').textContent = game1.getMessage();

window.addEventListener('keypress', function(e) {
	const guess = e.key;
	game1.makeGuess(guess);
	generateGameDOM();
});

const generateGameDOM = function() {
	document.querySelector('#puzzle').textContent = game1.getPuzzle();
	document.querySelector('#message').textContent = game1.getMessage();
};
