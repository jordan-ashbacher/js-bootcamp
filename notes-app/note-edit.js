const noteID = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note) {
	return note.id === noteID;
});

if (note === undefined) {
	location.assign('/index.html');
}

document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;

document.querySelector('#note-title').addEventListener('input', function(e) {
	note.title = e.target.value;
	saveNote(notes);
});

document.querySelector('#note-body').addEventListener('input', function(e) {
	note.body = e.target.value;
	saveNote(notes);
});

document.querySelector('#remove-note').addEventListener('click', function(e) {
	removeNote(note.id);
	saveNote(notes);
	location.assign('/index.html');
});
