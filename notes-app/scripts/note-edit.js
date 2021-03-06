'use strict';

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const timeElement = document.querySelector('#last-edited');
const removeElement = document.querySelector('#remove-note');
const noteID = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteID);

if (!note) {
	location.assign('/index.html');
}

titleElement.value = note.title;
timeElement.textContent = generateLastEdited(note.updatedAt);
bodyElement.value = note.body;

titleElement.addEventListener('input', (e) => {
	note.title = e.target.value;
	note.updatedAt = moment().valueOf();
	timeElement.textContent = generateLastEdited(note.updatedAt);
	saveNote(notes);
});

bodyElement.addEventListener('input', (e) => {
	note.body = e.target.value;
	note.updatedAt = moment().valueOf();
	timeElement.textContent = generateLastEdited(note.updatedAt);
	saveNote(notes);
});

removeElement.addEventListener('click', (e) => {
	removeNote(note.id);
	saveNote(notes);
	location.assign('/index.html');
});

window.addEventListener('storage', (e) => {
	if (e.key === 'notes') {
		notes = JSON.parse(e.newValue);
		note = notes.find((note) => note.id === noteID);

		if (!note) {
			location.assign('/index.html');
		}
		titleElement.value = note.title;
		timeElement.textContent = generateLastEdited(note.updatedAt);
		bodyElement.value = note.body;
	}
});
