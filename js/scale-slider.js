const SCALE_STEP = 25;

const userForm = document.querySelector('.img-upload__overlay');
const scaleControl = userForm.querySelector('.scale__control--value');
const controlPlusButton = userForm.querySelector('.scale__control--bigger');
const controlMinusButton = userForm.querySelector('.scale__control--smaller');
const imageUploadPreview = userForm.querySelector('.img-upload__preview img');

const effectSlider = userForm.querySelector('.effect-level__slider');
const effectValue = userForm.querySelector('.effect-level__value');

const onPlusClick = (event) => {
  event.preventDefault();
  increaseScale();
};
controlPlusButton.addEventListener('click', onPlusClick);

const onMinusClick = (event) => {
  event.preventDefault();
  decreaseScale();
};
controlMinusButton.addEventListener('click', onMinusClick);

const setScale = function (value) {
  scaleControl.value = value;
  const scaleValue = value.substring(0, scaleControl.value.length - 1);
  const scaleNumber = scaleValue / 100;
  imageUploadPreview.style.transform = 'scale' + '(' + scaleNumber + ')';
};

const increaseScale = () => {
  const currentValue = scaleControl.value.substring(0, scaleControl.value.length - 1);
  const currentValueNumber = parseInt(currentValue, 10);
  if (currentValueNumber < 100) {
    scaleControl.value = (currentValueNumber + SCALE_STEP) + '%';
  }
  setScale(scaleControl.value);
};

const decreaseScale = () => {
  const currentValue = scaleControl.value.substring(0, scaleControl.value.length - 1);
  if (currentValue > SCALE_STEP) {
    scaleControl.value = (currentValue - SCALE_STEP) + '%';
  }
  setScale(scaleControl.value);
};

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 150,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectValue.value = effectSlider.noUiSlider.get();
});

export { setScale };
