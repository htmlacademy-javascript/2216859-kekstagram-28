import { openBigPicture } from './bigpicture.js';
import { getData } from './api.js';

const GET_URL = ' https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 5000;
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

const onGetSuccess = (data) => renderPictures(data);
const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '100px';
  errorBlock.style.color = 'red';
  errorBlock.style.backgroundColor = 'DarkRed';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.fontWeight = 'bold';
  errorBlock.style.fontSize = '20px';
  errorBlock.style.padding = '40px';
  errorBlock.textContent = 'Произошла ошибка загрузки';
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export { getPicturesData };
