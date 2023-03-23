const MAX_HASHTAGS = 5;
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

const preparingValue = () => hashtagInput.value.toLowerCase().trim().split(' ');
const checkArrayLength = () => preparingValue().length <= MAX_HASHTAGS;
const checkHashtagDuplicate = () => new Set(preparingValue()).size === preparingValue().length;

const checkHashtagConsist = () => {
  let flag = true;
  const hashtagsArray = preparingValue();
  hashtagsArray.forEach((item) => {
    if (!HASHTAG.test(item)) {
      flag = false;
    }
  });
  return flag;
};

const addValidator = () => {
  pristine.addValidator(hashtagInput, checkArrayLength, 'Максимальное количество хэштегов 5', false);
  pristine.addValidator(hashtagInput, checkHashtagConsist, 'Использованы недопустимые символы или неверная длина', false);
  pristine.addValidator(hashtagInput, checkHashtagDuplicate, 'Хэштеги повторяются', false);
};

const checkValidity = () => pristine.validate();

export { addValidator, checkValidity };
