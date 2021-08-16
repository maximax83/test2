alert('start' + '\n' + 'window.innerWidth = ' + window.innerWidth);

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

window.addEventListener('resize', function() {
	// alert('resize' + '\n' + 'window.innerWidth = ' + window.innerWidth);

	header.prepend(footer);
	header.append(main);
});
