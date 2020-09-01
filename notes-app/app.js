const notes = [
	{
		title: 'My next trip',
		body: 'I would like to travel to Portugal'
	},
	{
		title: 'Habits to work on',
		body: 'Cook more.'
	},
	{
		title: 'Office modification',
		body: 'Build a PC.'
	}
];

const filters = {
	searchText: ''
};

const renderNotes = function(notes, filters) {
	const filteredNotes = notes.filter(function(note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	document.querySelector('#notes').innerHTML = '';

	filteredNotes.forEach(function(note) {
		const noteEl = document.createElement('p');
		noteEl.textContent = note.title;
		document.querySelector('#notes').appendChild(noteEl);
	});
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
	console.log('New note created');
});

document.querySelector('#search-text').addEventListener('input', function(e) {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
