let getTemp = function(fahrenheit) {
	return {
		fahrenheit: fahrenheit,
		celsius: Math.round((fahrenheit - 32) * (5 / 9)),
		kelvin: Math.round((fahrenheit + 459.67) * (5 / 9))
	};
};

let tempOne = getTemp(32);
let tempTwo = getTemp(84);
let tempThree = getTemp(75);

console.log(tempOne);
console.log(tempTwo);
console.log(tempThree);
