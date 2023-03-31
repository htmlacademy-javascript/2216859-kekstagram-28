import { renderPictures } from './thumbnails.js';

const getPictures = () => {
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    });
};

export { getPictures };
