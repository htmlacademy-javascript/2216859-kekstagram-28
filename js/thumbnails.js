import { openBigPicture } from './bigpicture.js';

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

const renderPictures = (pictures) => {
  pictures.forEach((item) => thumbnailsList.appendChild(createPicture(item)));
};

export { renderPictures };
