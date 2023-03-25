import { isEscapeKey } from './util.js';
import { addValidator, checkValidity } from './validation.js';
import { addScale, resetScale } from './scale.js';
import { initSlider, resetEffects } from './effects-slider.js';

const form = document.querySelector('#upload-select-image');
const userForm = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('#upload-file');
const closeFormButton = document.querySelector('#upload-cancel');

const onUploadFileInputChange = (event) => {
  event.preventDefault();
  openForm();
};

const onFormCloseButtonClick = (event) => {
  event.preventDefault();
  closeForm();
};

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event) && !event.target.closest('.text__description') && !event.target.closest('.text__hashtags')) {
    event.preventDefault();
    closeForm();
  }
};

const onAddFormSubmit = (event) => {
  event.preventDefault();
  const isValid = checkValidity();
  if (isValid) {
    console.log('+');
  } else {
    console.log('-');
  }
};

const addUserFormAction = () => {
  addValidator();
  initSlider();
  addScale();
  uploadFileInput.addEventListener('change', onUploadFileInputChange);
  form.addEventListener('submit', onAddFormSubmit);
};

function openForm() {
  userForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeFormButton.addEventListener('click', onFormCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeForm() {
  userForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeFormButton.removeEventListener('click', onFormCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  form.reset();
  resetScale();
  resetEffects();
}

export { addUserFormAction };
