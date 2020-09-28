const gradeCalc = function(score, totalScore) {
	if (typeof score !== 'number' || typeof totalScore !== 'number') {
		throw Error('Both agruments must be a number');
	}

	const percent = score / totalScore * 100;
	let letterGrade = '';

	if (percent >= 90) {
		letterGrade = 'A';
	} else if (percent >= 80) {
		letterGrade = 'B';
	} else if (percent >= 70) {
		letterGrade = 'C';
	} else if (percent >= 60) {
		letterGrade = 'D';
	} else {
		letterGrade = 'F';
	}
	return `You got a ${letterGrade} (${percent}%)!`;
};

try {
	const result = gradeCalc(84, 100);
	console.log(result);
} catch (e) {
	console.log(e.message);
}
