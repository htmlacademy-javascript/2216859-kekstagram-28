import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = bigPicture.querySelector('.big-picture__cancel');
const bigPicutreImage = bigPicture.querySelector('.big-picture__img img');
const pictureLikes = bigPicture.querySelector('.likes-count');
const pictureCommentsNumber = bigPicture.querySelector('.comments-count');
const pictureCaption = bigPicture.querySelector('.social__caption');

const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoaderBtn = bigPicture.querySelector('.social__comments-loader');

const hideObjects = () => {
  commentCount.classList.add('hidden');
  commentLoaderBtn.classList.add('hidden');
};

const onBigPictureClick = (event) => {
  event.preventDefault();
  closeBigPicture();
};

const fillBigPicture = (picture) => {
  bigPicutreImage.src = picture.url;
  pictureLikes.textContent = picture.likes;
  pictureCommentsNumber.textContent = picture.comments.length;
  pictureCaption.textContent = picture.description;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCloseBtn.removeEventListener('click', onBigPictureClick);
};


const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCloseBtn.addEventListener('click', onBigPictureClick);
  fillBigPicture(data);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
};

export { openBigPicture, closeBigPicture, hideObjects };
