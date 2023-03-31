import { openBigPicture } from './bigpicture.js';
import { getData } from './api.js';
import { initFilter } from './filter.js';

const GET_URL = ' https://28.javascript.pages.academy/kekstagram/data';
const ERROR_MESSAGE = 'Произошла ошибка загрузки данных';
const ERROR_TIMEOUT = 6000;
const thumbnailsList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = (picture) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = picture.url;
  thumbnail.querySelector('.picture__img').alt = picture.description;
  thumbnail.querySelector('.picture__likes').textContent = picture.likes;
  thumbnail.querySelector('.picture__comments').textContent = picture.comments.length;
  thumbnail.addEventListener('click', () => {
    openBigPicture(picture);
  });
  return thumbnail;
};

const renderPictures = (data) => {
  data.forEach((item) => thumbnailsList.appendChild(createPicture(item)));
};

const onGetSuccess = (data) => {
  renderPictures(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.classList.add('error__block');
  errorBlock.textContent = ERROR_MESSAGE;
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export { getPicturesData, renderPictures };
