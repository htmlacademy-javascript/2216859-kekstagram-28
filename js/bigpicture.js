import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureLikes = bigPicture.querySelector('.likes-count');
const pictureCommentsNumber = bigPicture.querySelector('.comments-count');
const pictureCaption = bigPicture.querySelector('.social__caption');

const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialComment = socialCommentsList.querySelector('.social__comment');
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

const onDocumentKeyDown = (event) => {
  if (isEscapeKey(event) && event.target.closeset('.social__footer-text')) {
    event.preventDefault();
    closeBigPicture();
  }
};

const createComment = (data) => {
  const comment = socialComment.cloneNode(true);
  const commentAvatar = comment.querySelector('.social__picture');
  const commentMessage = comment.querySelector('.social__text');

  commentAvatar.src = data.avatar;
  commentAvatar.alt = data.name;
  commentMessage.textContent = data.message;

  return comment;
};

const fillBigPicture = (picture) => {
  bigPictureImage.src = picture.url;
  pictureLikes.textContent = picture.likes;
  pictureCommentsNumber.textContent = picture.comments.length;
  pictureCaption.textContent = picture.description;
};

const fillComments = (data) => {
  socialCommentsList.innerHTML = '';
  data.forEach((item) => socialCommentsList.appendChild(createComment(item)));
};


const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCloseBtn.addEventListener('click', onBigPictureClick);
  document.addEventListener('keydown', onDocumentKeyDown);
  fillBigPicture(data);
  fillComments(data.comments);
  hideObjects();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCloseBtn.removeEventListener('click', onBigPictureClick);
  document.removeEventListener('keydown', onDocumentKeyDown);
};

export { openBigPicture };
