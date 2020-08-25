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

for (i = 0; i < notes.length; i++) {
	console.log(`${i}: ${notes[i]}`);
}

const index = notes.findIndex(function(note, index) {
	return note.title === 'Habits to work on';
});

console.log(index);
