let getGrade = function(studentScore, totalScore) {
	let score = Math.round(studentScore / totalScore * 100);
	if (score >= 90) {
		return `You got an A (${score}%)!`;
	} else if (score >= 80) {
		return `You got a B (${score}%)!`;
	} else if (score >= 70) {
		return `You got a C (${score}%)!`;
	} else if (score >= 60) {
		return `You got a D (${score}%)!`;
	} else {
		return `You got an F (${score}%)!`;
	}
};

let gradeOne = getGrade(99, 100);
let gradeTwo = getGrade(85, 100);
let gradeThree = getGrade(75, 100);
let gradeFour = getGrade(65, 100);
let gradeFive = getGrade(55, 100);

console.log(gradeOne);
console.log(gradeTwo);
console.log(gradeThree);
console.log(gradeFour);
console.log(gradeFive);
