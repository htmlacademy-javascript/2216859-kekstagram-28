const userForm = document.querySelector('.img-upload__overlay');
const effectSlider = userForm.querySelector('.effect-level__slider');
const effectValue = userForm.querySelector('.effect-level__value');

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

