import { isEscapeKey } from './util.js';
import { addValidator, checkValidity } from './validation.js';

const form = document.querySelector('#upload-select-image');
const userForm = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('#upload-file');
const closeFormBtn = document.querySelector('#upload-cancel');

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

const addUserFormAction = () => {
  addValidator();
  uploadFileInput.addEventListener('change', onUploadFileInputChange);
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = checkValidity();
    if (isValid) {
      console.log('+');
    } else {
      console.log('-');
    }
  });
};

const openForm = () => {
  userForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeFormBtn.addEventListener('click', onFormCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  userForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeFormBtn.removeEventListener('click', onFormCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  form.reset();
};

export { addUserFormAction };

