const SCALE_STEP = 25;

const userForm = document.querySelector('.img-upload__overlay');
const scaleControl = userForm.querySelector('.scale__control--value');
const controlPlusButton = userForm.querySelector('.scale__control--bigger');
const controlMinusButton = userForm.querySelector('.scale__control--smaller');
const imageUploadPreview = userForm.querySelector('.img-upload__preview img');

const onPlusButtonClick = (event) => {
  event.preventDefault();
  increaseScale();
};
controlPlusButton.addEventListener('click', onPlusButtonClick);

const onMinusButtonClick = (event) => {
  event.preventDefault();
  decreaseScale();
};
controlMinusButton.addEventListener('click', onMinusButtonClick);

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

export { setScale };
