var cards = [
	{
		"id": 1,
		"title": "Read the Book",
		"description": "I should read the whole book",
		"color": "#8D8D31",
		"status": "in-progress",
		"tasks": []
	},
	{
		"id": 2,
		"title": "Write some code",
		"description": "Code along with the samples in the book",
		"color": "#3A7E28",
		"status": "todo",
		"tasks": [
			{ "id": 1, "name": "ContactList Example", "done": true },
			{ "id": 2, "name": "KanBan Example", "done": false },
			{ "id": 3, "name": "My own experiments", "done": false }
		]
	},
	{
		"id": 3,
		"title": "Buy a Reack Book",
		"description": "Pro: An app should be built throughout the book",
		"color": "#C0BFBC",
		"status": "completed",
		"tasks": []
	}
];

export function getCards() {
	return cards;
}

export function getCardById(cardId) {
	return cards.find(card => card.id === cardId);
}

export function getCardsByStatus(status) {
	status = status === 'To Do' ? 'todo' :
		status === 'In Progress' ? 'in-progress' : 'completed';
	return cards.filter(card => card.status === status);
}

export function createCard(card) {
	const id = Date.now();
	cards.push({ id, ...card, tasks: [] });
}

export function updateCard(cardId, card) {
	let cardIndex = cards.findIndex(card => card.id === cardId);
	cards[cardIndex] = { ...cards[cardIndex], ...card };
}

export function updateCardStatus(cardId, status) {
	let cardIndex = cards.findIndex(card => card.id === cardId);
	cards[cardIndex].status = status;
}

export function deleteCard(cardId) {
	cards = cards.filter(card => card.id !== cardId);
}

export function toggleTask(cardId, taskId) {
	const cardIndex = cards.findIndex(card => card.id === cardId);
	let taskIndex = cards[cardIndex].tasks.findIndex(task => task.id == taskId);
	let done = !cards[cardIndex].tasks[taskIndex].done;
	cards[cardIndex].tasks[taskIndex].done = done;
}

export function createTask(cardId, name) {
	let id = Date.now();
	const cardIndex = cards.findIndex(card => card.id === cardId);
	cards[cardIndex].tasks.push({ id, name, done: false });
}

export function deleteTask(cardId, taskId) {
	const cardIndex = cards.findIndex(card => card.id === cardId);
	let tasks = cards[cardIndex].tasks.filter(task => task.id !== taskId);
	cards[cardIndex] = { ...cards[cardIndex], tasks };
}
