const getPuzzle = async (wordCount) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	
	if (response.status === 200) {
		const data = await response.json()
		return data.puzzle
	} else {
		throw new Error('Unable to fetch puzzle')
	}
}

const getCurrentCountry = async () => {
	let location = await getLocation()
	return getCountry(location.country)

}

const getCountry = async (countryCode) => {
	const response = await fetch('http://restcountries.eu/rest/v2/all')

	if (response.status === 200) {
		const data = await response.json()
		return data.find((country) => country.alpha2Code === countryCode)
	} else {
		throw new Error ('Unable to fetch country data')
	}
}

const getLocation = async () => {
	const response = await fetch('https://ipinfo.io/json?token=db382f08dbc601')

	if (response.status === 200) {
		return response.json()
	} else {
		throw new Error('Unable to fetch IP data')
	}
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
