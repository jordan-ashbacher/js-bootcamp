const todos = [
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

const filters = {
	searchText: ''
};

const renderTasks = function(todos, filters) {
	const filteredTodos = todos.filter(function(task) {
		return task.text.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	const incompleteTodos = filteredTodos.filter(function(todo) {
		return !todo.completed;
	});

	document.querySelector('#todos').innerHTML = '';

	const summaryEl = document.createElement('h2');
	summaryEl.textContent = `You have ${incompleteTodos.length} to-dos remaining`;
	document.querySelector('#todos').appendChild(summaryEl);

	filteredTodos.forEach(function(task) {
		const todoEl = document.createElement('p');
		todoEl.textContent = task.text;
		document.querySelector('#todos').appendChild(todoEl);
	});
};

renderTasks(todos, filters);

document.querySelector('#add-todo').addEventListener('click', function(e) {
	console.log('New to do added to list');
});

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
	console.log(e.target.value);
});

document.querySelector('#search-todos').addEventListener('input', function(e) {
	filters.searchText = e.target.value;
	renderTasks(todos, filters);
});
