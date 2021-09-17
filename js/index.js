const menu1 = document.querySelector('.menu-1');
const menu2 = document.querySelector('.menu-2');
const menu3 = document.querySelector('.menu-3');
const pageItem1 = document.querySelector('.page-item-1');
const pageItem2 = document.querySelector('.page-item-2');
const pageItem3 = document.querySelector('.page-item-3');

document.querySelector('.menu-link-1').addEventListener('click', () => {
	pageItem1.classList.add('active');
	pageItem2.classList.remove('active');
	pageItem3.classList.remove('active');
	menu1.removeAttribute('hidden');
	menu2.setAttribute('hidden', true);
	menu3.setAttribute('hidden', true);
});
document.querySelector('.menu-link-2').addEventListener('click', () => {
	pageItem2.classList.add('active');
	pageItem1.classList.remove('active');
	pageItem3.classList.remove('active');
	menu2.removeAttribute('hidden');
	menu1.setAttribute('hidden', true);
	menu3.setAttribute('hidden', true);
});
document.querySelector('.menu-link-3').addEventListener('click', () => {
	pageItem3.classList.add('active');
	pageItem1.classList.remove('active');
	pageItem2.classList.remove('active');
	menu3.removeAttribute('hidden');
	menu1.setAttribute('hidden', true);
	menu2.setAttribute('hidden', true);
});
