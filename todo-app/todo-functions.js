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

// Toggle completed value of to-do
const toggleTodo = function(id) {
	const todoIndex = todos.findIndex(function(todo) {
		return todo.id === id;
	});
	if (todoIndex > -1) {
		todos[todoIndex].completed = !todos[todoIndex].completed;
	}
};

// Remove a to-do from list by ID
const removeTodo = function(id) {
	const todoIndex = todos.findIndex(function(todo) {
		return todo.id === id;
	});
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}
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

	document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

	filteredTodos.forEach(function(todo) {
		document.querySelector('#todos').appendChild(generateTodoDOM(todo));
	});
};

// Generate DOM element for each to-do
const generateTodoDOM = function(todo) {
	const todoEl = document.createElement('div');
	const checkEl = document.createElement('input');
	const textEl = document.createElement('span');
	const deleteEl = document.createElement('button');

	// Setup to-do checkbox
	checkEl.setAttribute('type', 'checkbox');
	checkEl.checked = todo.completed;
	checkEl.addEventListener('change', function(e) {
		toggleTodo(todo.id);
		saveTodo(todos);
		renderTodos(todos, filters);
	});
	todoEl.appendChild(checkEl);

	// Setup to-do text
	textEl.textContent = todo.text;
	todoEl.appendChild(textEl);

	// Setup delete button
	deleteEl.textContent = 'x';
	todoEl.appendChild(deleteEl);
	deleteEl.addEventListener('click', function(e) {
		removeTodo(todo.id);
		saveTodo(todos);
		renderTodos(todos, filters);
	});

	return todoEl;
};

// Generate the remaining to-do summary
const generateSummaryDOM = function(todos) {
	const summaryEl = document.createElement('h2');
	summaryEl.textContent = `You have ${todos.length} to-dos remaining`;
	return summaryEl;
};
