let convertFahrenheitToCelsius = function(f) {
	let celsius = Math.round((f - 32) * 5 / 9);
	return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(89);

console.log(tempOne);
console.log(tempTwo);
