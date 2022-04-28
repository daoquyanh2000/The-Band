const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const spanCloseModal = document.querySelector('.js-close-modal');
const modalContainer = document.querySelector('.js-modal-container');
const menuIcon = document.getElementById('menu-icon');
const header = document.getElementById('header');

//show nav in mobile
var heightHeader = header.clientHeight;

menuIcon.onclick = function () {
	isClosed = heightHeader === header.clientHeight;
	if (isClosed) {
		header.style.height = 'max-content';
	} else {
		header.style.height = heightHeader;
	}
	console.log(header.clientHeight);
};

//close nav after selection
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
	let menuItem = menuItems[i];
	menuItem.onclick = function (event) {
		let isSubMenu =
			this.nextElementSibling &&
			this.nextElementSibling.classList.contains('subnav');
		if (isSubMenu) {
			event.preventDefault();
		} else {
			header.style.height = null;
		}
	};
}

//show modal
for (const buyBtn of buyBtns) {
	buyBtn.addEventListener('click', function () {
		console.log(this);
		modal.classList.remove('modal-close');
	});
}
function closeModal() {
	modal.classList.add('modal-close');
}
//close modal
spanCloseModal.addEventListener('click', closeModal);

modal.addEventListener('click', closeModal);

modalContainer.addEventListener('click', function (event) {
	event.stopPropagation();
});

//////////////////////////////////////////////////////////

const memberImgs = document.querySelectorAll('.js-member-img');
const textsTheband = document.querySelectorAll('.text-theband');

memberImgs.forEach((img) => {
	img.addEventListener('click', function (e) {
		console.log(e.target.dataset.name);
		data = e.target.dataset.name;

		textsTheband.forEach((text) => {
			if (text.classList.contains(data)) {
				text.style.display = 'block';
				let header = document.getElementsByClassName('content-heading').item(0);
				console.log(header);
				header.innerText = data.replace('-', ' ');

				document
					.getElementsByClassName('text-content')
					.item(0)
					.scrollIntoView();
			} else {
				text.style.display = 'none';
			}
		});
	});
});
