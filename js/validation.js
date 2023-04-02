const MAX_HASHTAGS = 5;
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ARRAY_LENGTH_ERROR_TEXT = 'Максимальное количество хэштегов 5';
const HASHTAG_CONSIST_ERROR_TEXT = 'Использованы недопустимые символы или неверная длина';
const DUPLICATE_ERROR_TEXT = 'Хэштеги повторяются';
const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

const preparingValue = () => hashtagInput.value.toLowerCase().trim().split(' ').filter((item) => item);
const checkArrayLength = () => preparingValue().length <= MAX_HASHTAGS;
const checkHashtagDuplicate = () => new Set(preparingValue()).size === preparingValue().length;

const checkHashtagConsist = () => {
  let flag = true;
  const hashtagsArray = preparingValue();
  hashtagsArray.some((item) => {
    if (!HASHTAG.test(item)) {
      flag = false;
    }
  });
  return flag;
};

const addValidator = () => {
  pristine.addValidator(hashtagInput, checkArrayLength, ARRAY_LENGTH_ERROR_TEXT, true);
  pristine.addValidator(hashtagInput, checkHashtagConsist, HASHTAG_CONSIST_ERROR_TEXT, true);
  pristine.addValidator(hashtagInput, checkHashtagDuplicate, DUPLICATE_ERROR_TEXT, true);
};

const checkValidity = () => pristine.validate();

export { addValidator, checkValidity };
