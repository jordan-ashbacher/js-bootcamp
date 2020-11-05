const getPuzzle = (wordCount) => {
	return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
		if (response.status === 200) {
			return response.json()
		} else {
			throw new Error('Unable to fetch puzzle data')
		}
	}).then((data) => {
		return data.puzzle
	})
}

const getCountry = (countryCode) => {
	return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
		if (response.status === 200) {
			return response.json()
		} else {
			throw new Error('Unable to fetch country data')
		}
	}).then((data) => {
		return data.find((country) => country.alpha2Code === countryCode)
	})
}


// const getCountry = (countryCode) =>
// 	new Promise((resolve, reject) => {
// 		const countryRequest = new XMLHttpRequest();
// 		countryRequest.addEventListener('readystatechange', (e) => {
// 			if (e.target.readyState === 4 && e.target.status === 200) {
// 				const countryData = JSON.parse(e.target.responseText);
// 				const country = countryData.find((country) => country.alpha2Code === countryCode);
// 				resolve(country);
// 			} else if (e.target.readyState === 4) {
// 				reject('The data could not be fetched');
// 			}
// 		});

// 		countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// 		countryRequest.send();
// 	});
