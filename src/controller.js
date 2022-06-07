import { table } from './view';
import { Game } from './game';

const game = new Game();


import 'virtual:windi.css';
import '../style.css';

const app = document.getElementById('app');
let tableNode;
const body = document.getElementsByTagName('body')[0];

const BtnLight = document.getElementById('btn-light');
const BtnDark = document.getElementById('btn-dark');

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
    data = data.table.map((d, i) => {
		return d.map((cell, j) => {
			return {
				onClick: () => handleClick(cell, i, j),
				onRightClick: () => handleRightClick(cell, i, j),
				...cell
			};
		});
	});
    tableNode?.remove();
	tableNode = table(data);
	app.appendChild(tableNode);
}

updateUI();
