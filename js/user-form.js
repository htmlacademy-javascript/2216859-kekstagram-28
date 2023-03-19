import { isEscapeKey } from './util.js';

const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const form = document.querySelector('.img-upload__form');
const userForm = document.querySelector('.img-upload__overlay');
const uploadFileBtn = document.querySelector('#upload-file');
const closeFormBtn = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});


const checkArrayLength = () => {
  const hashtagsValue = hashtagInput.value;
  const hashtagsArray = hashtagsValue.toLowerCase().trim().split(' ');
  if (hashtagsArray.length <= MAX_HASHTAGS) {
    return true;
  }
  return false;
};

const checkHashtagConsist = () => {
  const hashtagsValue = hashtagInput.value;
  const hashtagsArray = hashtagsValue.toLowerCase().trim().split(' ');
  for (let i = 0; i < hashtagsArray.length; i++) {
    if (HASHTAG.test(hashtagsArray[i])) {
      return true;
    }
    return false;
  }
};

const checkHashtagDuplicate = () => {
  const hashtagsValue = hashtagInput.value;
  const hashtagsArray = hashtagsValue.toLowerCase().trim().split(' ');
  if (new Set(hashtagsArray).size === hashtagsArray.length) {
    return true;
  }
  return false;
};

pristine.addValidator(hashtagInput, checkArrayLength, 'Максимальное количество хэштегов 5', false);
pristine.addValidator(hashtagInput, checkHashtagConsist, 'Использованы недопустимые символы или неверная длина', false);
pristine.addValidator(hashtagInput, checkHashtagDuplicate, 'Хэштеги повторяются', false);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('+');
  } else {
    console.log('-');
  }
});

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

