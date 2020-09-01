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
	searchText: '',
	hideCompleted: false
};

const renderTodos = function(todos, filters) {
	const filteredTodos = todos.filter(function(todo) {
		if (filters.hideCompleted == true) {
			return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
		} else {
			return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
		}
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

renderTodos(todos, filters);

document.querySelector('#search-todos').addEventListener('input', function(e) {
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});

document.querySelector('#create-todo').addEventListener('submit', function(e) {
	e.preventDefault();
	todos.push({
		text: e.target.elements.todoText.value,
		completed: false
	});
	renderTodos(todos, filters);
	e.target.elements.todoText.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});
