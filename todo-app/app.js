const tasks = [
	{
		text: 'Learn Javascript',
		completed: false
	},
	{
		text: 'Practice yoga',
		completed: true
	},
	{
		text: 'Improve 3-point percentage',
		completed: true
	},
	{
		text: 'Fall in love again',
		completed: false
	},
	{
		text: 'Compete in a half-marathon',
		completed: false
	},
	{
		text: 'Build a website',
		completed: true
	},
	{
		text: 'Take over the world',
		completed: false
	},
	{
		text: 'Have a mental breakdown',
		completed: true
	}
];

// Initial uncompleted task count function
// let uncompletedTaskCount = 0;
// const countUncompletedTasks = tasks.forEach(function(task) {
// 	if (task.completed === false) {
// 		uncompletedTaskCount++;
// 	}
// });

const uncompletedTasks = tasks.filter(function(task) {
	return !task.completed;
});

console.log(uncompletedTasks);

const uncompletedTaskSummary = document.createElement('p');
uncompletedTaskSummary.textContent = `You have ${uncompletedTasks.length} tasks left`;
document.querySelector('body').appendChild(uncompletedTaskSummary);

tasks.forEach(function(task) {
	let item = document.createElement('p');
	item.textContent = task.text;
	document.querySelector('body').appendChild(item);
});
