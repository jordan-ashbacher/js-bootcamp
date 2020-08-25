const tasks = [
	'Study Javascript',
	'Practice yoga',
	'Improve jumpshot',
	'Go on dates',
	'Run a half-marathon',
	'Build a website',
	'Take over the world'
];

tasks.splice(2, 1);
tasks.push('Improve 3-point range');
tasks.shift();

console.log(`You have ${tasks.length} todos on your list.`);
console.log(tasks);
