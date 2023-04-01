import { isEscapeKey } from './util.js';
import { addValidator, checkValidity } from './validation.js';
import { addScale, resetScale } from './scale.js';
import { initSlider, resetEffects } from './effects-slider.js';
import { sendData } from './api.js';
import { showFailMessage, showSuccessMessage } from './messages.js';

const POST_URL = 'https://28.javascript.pages.academy/kekstagram';
const BLOCKED_BUTTON_STATE = 'Публикую';
const UNBLOCKED_BUTTON_STATE = 'Опубликовать';
const form = document.querySelector('#upload-select-image');
const userForm = document.querySelector('.img-upload__overlay');
const imagePreview = document.querySelector('.img-upload__preview img');
const uploadFileInput = document.querySelector('#upload-file');
const closeFormButton = document.querySelector('#upload-cancel');
const submitFormButton = document.querySelector('#upload-submit');

const onUploadFileInputChange = (event) => {
  event.preventDefault();
  openForm();
  imagePreview.src = URL.createObjectURL(event.target.files[0]);
};

const onFormCloseButtonClick = (event) => {
  event.preventDefault();
  closeForm();
};

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event) && !event.target.closest('.text__description') && !event.target.closest('.text__hashtags')) {
    if (document.querySelector('.error')) {
      return;
    }
    event.preventDefault();
    closeForm();
  }
};

const changeSubmitFormButtonState = (state, text) => {
  submitFormButton.disabled = state;
  submitFormButton.textContent = text;
};

const onSendSuccess = () => {
  showSuccessMessage();
  closeForm();
  changeSubmitFormButtonState(false, UNBLOCKED_BUTTON_STATE);
};

const onSendFail = () => {
  showFailMessage();
  changeSubmitFormButtonState(false, UNBLOCKED_BUTTON_STATE);
};


const onAddFormSubmit = (event) => {
  event.preventDefault();
  const isValid = checkValidity();
  if (isValid) {
    changeSubmitFormButtonState(true, BLOCKED_BUTTON_STATE);
    const formData = new FormData(event.target);
    sendData(POST_URL, onSendSuccess, onSendFail, formData);
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

