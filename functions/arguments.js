let getTip = function(total, tipPercent = 0.2) {
	return total * tipPercent;
};

let tip = getTip(100);
let tip2 = getTip(30, 0.1);
let tip3 = getTip(100, 0.15);

console.log(tip);
console.log(tip2);
console.log(tip3);
