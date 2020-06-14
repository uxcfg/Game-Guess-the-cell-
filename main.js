'use strict';

let btn = document.querySelector('#btnStart');
let tds = document.querySelectorAll('#table td');
let timer = document.querySelector('.timer span');
let timerFull = document.querySelector('.timer');

btn.addEventListener('click', getCeil);

function getCeil() {
	let arr = [];
	let count = 0;

	while (true) {
		let x = Math.floor(Math.random() * (24 + 1 - 0) + 0);
		if (!arr.includes(x)) {
			arr.push(x);
			tds[x].classList.add('active');
		}
		if (arr.length === 10) {
			break;
		}
	}

	btn.innerHTML = timer.innerHTML;
	timerFull.innerHTML = '';
	let timerID = setInterval(function () {
		btn.innerHTML--;
		if (+btn.innerHTML < 0) {
			btn.innerHTML = 'Start'
			alert(`Ваш счёт: ${count}`);
			clearInterval(timerID);
			location.reload();
		}
	}, 1000);

	for (let el of tds) {
		el.addEventListener('click', function func() {
			if (this.classList.contains('active')) {
				this.classList.add('red');
				count++;
			}

			this.removeEventListener('click', func);
		});
	}

	btn.removeEventListener('click', getCeil);
}
