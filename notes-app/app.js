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

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from Javascript';
document.querySelector('body').appendChild(newParagraph);
