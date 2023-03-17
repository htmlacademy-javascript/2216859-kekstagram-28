import { isEscapeKey } from './util.js';
const form = document.querySelector('#upload-select-image');

new Pristine(form);
const userForm = document.querySelector('.img-upload__overlay');
const uploadFileBtn = document.querySelector('#upload-file');
const closeFormBtn = document.querySelector('#upload-cancel');

const onUploadClick = (event) => {
  userForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  event.preventDefault();
  openUserForm();
};

const onFormClick = (event) => {
  event.preventDefault();
  closeForm();
};

const onDocumentKeyDown = (event) => {
  if (isEscapeKey(event) && !event.target.closest('.text__description') && !event.target.closest('.text__hashtags')) {
    event.preventDefault();
    closeForm();
  }
};

const openUserForm = () => {
  uploadFileBtn.addEventListener('change', onUploadClick);
  closeFormBtn.addEventListener('click', onFormClick);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const closeForm = () => {
  userForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeFormBtn.removeEventListener('click', onFormClick);
  document.removeEventListener('keydown', onDocumentKeyDown);
  uploadFileBtn.value = '';
};



export { openUserForm };

