// Get to-dos from local storage
const getSavedTodos = function() {
	const todosJSON = localStorage.getItem('todos');

	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	} else {
		return [];
	}
};

// Save to-do to local storage
const saveTodo = function(todo) {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// Generate the remaining to-do summary
const generateSummaryDOM = function(todos) {
	const summaryEl = document.createElement('h2');
	summaryEl.textContent = `You have ${todos.length} to-dos remaining`;
	return summaryEl;
};

// Generate DOM element for each to-do
const generateTodoDOM = function(todo) {
	const todoEl = document.createElement('p');
	todoEl.textContent = todo.text;
	return todoEl;
};

// Render application to-do list with filters
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

	const summaryEl = generateSummaryDOM(incompleteTodos);
	document.querySelector('#todos').appendChild(summaryEl);

	filteredTodos.forEach(function(todo) {
		todoEl = generateTodoDOM(todo);
		document.querySelector('#todos').appendChild(todoEl);
	});
};
