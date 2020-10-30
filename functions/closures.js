const createCounter = () => {
	let count = 0;

	return {
		increment() {
			count++;
		},
		decrement() {
			count--;
		},
		get() {
			return count;
		}
	};
};

const counter = createCounter();
console.log(counter);

const createAdder = (a) => {
	return (b) => {
		return (a = b);
	};
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100);
console.log(add100(-90));

const createTipper = (tip) => {
	return (bill) => {
		return `$${tip * bill}`;
	};
};

const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);
const tip25 = createTipper(0.25);

console.log(tip15(50));
console.log(tip20(50));
console.log(tip25(50));
