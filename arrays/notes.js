const notes = [ 'Note 1', 'Note 2', 'Note 3' ];

notes[2] = 'This is now the new note 3';

// notes.forEach(function(note, index) {
// 	console.log(`${index}: ${note}`);
// });

for (i = 0; i < notes.length; i++) {
	console.log(`${i}: ${notes[i]}`);
}
