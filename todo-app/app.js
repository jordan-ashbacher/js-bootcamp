let todos = [];

const filters = {
	searchText: '',
	hideCompleted: false
};

const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
	todos = JSON.parse(todosJSON);
}

const renderTodos = function(todos, filters) {
	let filteredTodos = todos.filter(function(todo) {
		const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
		return searchTextMatch && hideCompletedMatch;
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
	localStorage.setItem('todos', JSON.stringify(todos));
	renderTodos(todos, filters);

	e.target.elements.todoText.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});
