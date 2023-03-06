import { createPictures } from './js/data.js';

const userFeed = document.querySelector('.pictures');
userFeed.querySelector('.pictures__title').classList.remove('visually-hidden');

const thumbnailsList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const generatePicture = createPictures();

const userFeedFragment = document.createDocumentFragment();

generatePicture.forEach(({ url, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  userFeedFragment.appendChild(thumbnail);
});

thumbnailsList.appendChild(userFeedFragment);
