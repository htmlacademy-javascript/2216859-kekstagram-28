import { createPictures } from './data.js';
const thumbnailsList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const pictureData = createPictures();

const createPicture = ({ url, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  return thumbnail;
};

const renderPictures = () => {
  pictureData.forEach((item) => thumbnailsList.appendChild(createPicture(item)));
};

export { renderPictures };
