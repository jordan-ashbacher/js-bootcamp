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

const deleteTask = function(array, taskItem) {
	const index = array.findIndex(function(task) {
		return task.text.toLowerCase() === taskItem.toLowerCase();
	});
	return array.splice(index, 1);
};

deleteTask(tasks, 'have a mental breakdown');
console.log(tasks);

// tasks.splice(2, 1);
// tasks.push('Improve 3-point range');
// tasks.shift();

// console.log(`You have ${tasks.length} todos on your list.`);

// tasks.forEach(function(task, index) {
// 	console.log(`${index + 1}. ${task}`);
// });

// for (i = 0; i < tasks.length; i++) {
// 	console.log(`${i + 1}. ${tasks[i]}`);
// }
