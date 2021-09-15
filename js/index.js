document.querySelector('.menu-link-1').addEventListener('click', () => {
	document.querySelector('.menu-1').removeAttribute('hidden');
	document.querySelector('.menu-2').setAttribute('hidden', true);
	document.querySelector('.menu-3').setAttribute('hidden', true);
});
document.querySelector('.menu-link-2').addEventListener('click', () => {
	document.querySelector('.menu-2').removeAttribute('hidden');
	document.querySelector('.menu-1').setAttribute('hidden', true);
	document.querySelector('.menu-3').setAttribute('hidden', true);
});
document.querySelector('.menu-link-3').addEventListener('click', () => {
	document.querySelector('.menu-3').removeAttribute('hidden');
	document.querySelector('.menu-1').setAttribute('hidden', true);
	document.querySelector('.menu-2').setAttribute('hidden', true);
});
