const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const noteID = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
	return note.id === noteID;
});

if (note === undefined) {
	location.assign('/index.html');
}

document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;

titleElement.addEventListener('input', function(e) {
	note.title = e.target.value;
	saveNote(notes);
});

bodyElement.addEventListener('input', function(e) {
	note.body = e.target.value;
	saveNote(notes);
});

document.querySelector('#remove-note').addEventListener('click', function(e) {
	removeNote(note.id);
	saveNote(notes);
	location.assign('/index.html');
});

window.addEventListener('storage', function(e) {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		note = notes.find(function(note) {
			return note.id === noteID;
		});

		if (note === undefined) {
			location.assign('/index.html');
		}
	}
});
