const square = (num) => num * num;

const squareLong = (num) => {
	return num * num;
};

console.log(square(5));

const people = [
	{
		name: 'Jordan',
		age: 29
	},
	{
		name: 'Vikram',
		age: 31
	},
	{
		name: 'Jen',
		age: 25
	}
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const age25 = people.filter((person) => person.age === 25);
console.log(age25);
