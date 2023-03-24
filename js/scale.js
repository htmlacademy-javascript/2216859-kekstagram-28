const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleInput = document.querySelector('.scale__control--value');
const controlPlusButton = document.querySelector('.scale__control--bigger');
const controlMinusButton = document.querySelector('.scale__control--smaller');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageUploadPreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onPlusButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const onMinusButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

const addScale = () => {
  controlPlusButton.addEventListener('click', onPlusButtonClick);
  controlMinusButton.addEventListener('click', onMinusButtonClick);
};

export { addScale, resetScale };
