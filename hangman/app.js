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

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText);
		console.log(data);
	} else if (e.target.readyState === 4) {
		console.log('An error has taken place');
	}
});

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();

const countryCode = 'US';

const countryRequest = new XMLHttpRequest();
countryRequest.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const countryData = JSON.parse(e.target.responseText);
		const country = countryData.find((country) => country.alpha2Code === countryCode);
		console.log(country.name);
	}
});

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();
