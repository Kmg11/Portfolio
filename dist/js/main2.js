// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuNavItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

// Click Button To Toggle Menu
menuBtn.addEventListener('click', toggleMenu);

// Toggle Menu Function
function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuBranding.classList.add('show');
		menuNav.classList.add('show');
		menuNavItems.forEach(item => item.classList.add('show'));

		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuBranding.classList.remove('show');
		menuNav.classList.remove('show');
		menuNavItems.forEach(item => item.classList.remove('show'));

		// Set Menu State 
		showMenu = false;
	}
}