const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const PERCENT_DIVIDER = 100;

const scaleInput = document.querySelector('.scale__control--value');
const controlPlusButton = document.querySelector('.scale__control--bigger');
const controlMinusButton = document.querySelector('.scale__control--smaller');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageUploadPreview.style.transform = `scale(${value / PERCENT_DIVIDER})`;
  scaleInput.value = `${value}%`;
};

const onPlusButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  if (currentValue < MAX_SCALE) {
    scaleImage(currentValue + SCALE_STEP);
  }
};

const onMinusButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  if (currentValue > MIN_SCALE) {
    scaleImage(currentValue - SCALE_STEP);
  }
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

const addScale = () => {
  controlPlusButton.addEventListener('click', onPlusButtonClick);
  controlMinusButton.addEventListener('click', onMinusButtonClick);
};

export { addScale, resetScale };
