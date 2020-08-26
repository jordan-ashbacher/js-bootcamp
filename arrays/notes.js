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

// notes.forEach(function(note, index) {
// 	console.log(`${index}: ${note}`);
// });

// for (i = 0; i < notes.length; i++) {
// 	console.log(`${i}: ${notes[i]}`);
// }

const sortNotes = function(notes) {
	notes.sort(function(a, b) {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1;
		} else if (b.title.toLowerCase() < a.title.toLowerCase()) {
			return 1;
		} else {
			return 0;
		}
	});
};

const index = notes.findIndex(function(note, index) {
	return note.title === 'Habits to work on';
});

sortNotes(notes);
console.log(notes);
