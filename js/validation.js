const MAX_HASHTAGS = 5;
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const form = document.querySelector('.img-upload__form');
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

const addValidator = () => {
  pristine.addValidator(hashtagInput, checkArrayLength, 'Максимальное количество хэштегов 5', false);
  pristine.addValidator(hashtagInput, checkHashtagConsist, 'Использованы недопустимые символы или неверная длина', false);
  pristine.addValidator(hashtagInput, checkHashtagDuplicate, 'Хэштеги повторяются', false);
};


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('+');
  } else {
    console.log('-');
  }
});

export { addValidator };
