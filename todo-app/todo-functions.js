'use strict';

// Get to-dos from local storage
const getSavedTodos = () => {
	const todosJSON = localStorage.getItem('todos');
	try {
		return todosJSON ? JSON.parse(todosJSON) : [];
	} catch (e) {
		return [];
	}
};

// Save to-do to local storage
const saveTodo = (todo) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// Toggle completed value of to-do
const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id);
	if (todo) {
		todo.completed = !todos.completed;
	}
};

// Remove a to-do from list by ID
const removeTodo = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}
};

// Render application to-do list with filters
const renderTodos = (todos, filters) => {
	let filteredTodos = todos.filter((todo) => {
		const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
		return searchTextMatch && hideCompletedMatch;
	});

	const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

	document.querySelector('#todos').innerHTML = '';

	document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

	filteredTodos.forEach((todo) => {
		document.querySelector('#todos').appendChild(generateTodoDOM(todo));
	});
};

// Generate DOM element for each to-do
const generateTodoDOM = (todo) => {
	const todoEl = document.createElement('div');
	const checkEl = document.createElement('input');
	const textEl = document.createElement('span');
	const deleteEl = document.createElement('button');

	// Setup to-do checkbox
	checkEl.setAttribute('type', 'checkbox');
	checkEl.checked = todo.completed;
	checkEl.addEventListener('change', (e) => {
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
	deleteEl.addEventListener('click', (e) => {
		removeTodo(todo.id);
		saveTodo(todos);
		renderTodos(todos, filters);
	});

	return todoEl;
};

// Generate the remaining to-do summary
const generateSummaryDOM = (todos) => {
	const summaryEl = document.createElement('h2');
	summaryEl.textContent = `You have ${todos.length} to-dos remaining`;
	return summaryEl;
};
