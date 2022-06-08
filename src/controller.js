import { table } from './view';
import { Game } from './game';

const game = new Game({mineCount: 20});


import 'virtual:windi.css';
import '../style.css';

const app = document.getElementById('app');
let tableNode;
const body = document.getElementsByTagName('body')[0];

const BtnLight = document.getElementById('btn-light');
const BtnDark = document.getElementById('btn-dark');

const BtnReset = document.getElementById('btn-reset');

BtnReset.addEventListener('click', () => {
	if(BtnReset.classList.contains('glow')) {
		BtnReset.classList.remove('glow')
	}
	game.reset()
	updateUI()
})

BtnLight.addEventListener('click', () => {
	console.log('go to light mode');
	if (body.classList.contains('dark')) {
		body.classList.remove('dark');
	}
});

BtnDark.addEventListener('click', () => {
	console.log('go to dark mode');
	if (!body.classList.contains('dark')) {
		body.classList.add('dark');
	}
});


function handleClick(tile, i, j) {
	console.log('click', tile);
	game.open(i, j);
	console.log(i, j);

	updateUI();
}
function handleRightClick(tile, i, j) {
	console.log('rightclick', tile);
	game.flag(i, j);

	console.log(i, j);
	updateUI();
}

function updateUI() {
	let data = game.getData();
    console.log({data})
    data.table = data.table.map((d, i) => {
		return d.map((cell, j) => {
			return {
				onClick: () => handleClick(cell, i, j),
				onRightClick: () => handleRightClick(cell, i, j),
				...cell
			};
		});
	});
    tableNode?.remove();
	tableNode = table(data.table);
	if(data.isLost) {
		console.log('isLost')
		tableNode.classList.add('table-lost');
		BtnReset.classList.add('glow');
	}
	if(data.isWon) {
		tableNode.classList.add('table-won');
		BtnReset.classList.add('glow');
	}
	app.appendChild(tableNode);
}

updateUI();
