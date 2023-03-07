const bigPicture = document.querySelector('.big-picture');
const closeModalElement = bigPicture.querySelector('.big-picture__cancel');

const openModal = () => {
  bigPicture.classList.remove('hidden');
};

const closeModal = () => {
  closeModalElement.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

export { openModal, closeModal };
