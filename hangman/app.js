const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#message');
let game1

window.addEventListener('keypress', (e) => {
	const guess = e.key;
	game1.makeGuess(guess);
	render()
});

const render = () => {
	puzzleEl.textContent = game1.puzzle;
	guessesEl.textContent = game1.statusMessage;
}

const startGame = async () => {
	const puzzle = await getPuzzle('2')
	game1 = new Hangman(puzzle, 5)
	render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then(
// 	(puzzle) => {
// 		console.log(puzzle);
// 	}).catch((err) => {
// 		console.log(`Error: ${err}`)
// 	})

// getCountry('NZ').then((country) => {
// 	console.log(country.name)
// }).catch((err) => {
// 	console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
// 	console.log(country.name)
// }).catch((error) => {
// 	console.log(error)
// })

// getLocation().then((location) => {
// 	return getCountry(location.country)
// }).then((country) => {
// 	console.log(country.name)
// }).catch((err) => {
// 	console.log(`Error: ${err}`)
// })

// getCountry('MX').then(
// 	(country) => {
// 		console.log(country.name);
// 	},
// 	(err) => {
// 		console.log(`Error: ${err}`);
// 	}
// );


// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
// 	if (response.status === 200) {
// 		return response.json()
// 	} else {
// 		throw new Error ('Unable to fetch puzzle')
// 	}
// }).then((data) => {
// 	console.log(data.puzzle)
// }).catch((err) => {
// 	console.log(err)
// })