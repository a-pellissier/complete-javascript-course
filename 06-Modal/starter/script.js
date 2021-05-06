'use strict';

//HTML objects
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

//Hide and show modal window and overlay
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//Add on-click action for show buttons
for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
}

//Add on-click action for close button and overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Add escape key support
document.addEventListener(
    'keydown',
    function (event) {
        if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    }
);