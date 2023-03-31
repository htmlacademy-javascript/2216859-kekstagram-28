import { renderPictures } from './thumbnails.js';
import { shuffleArray } from './util.js';

const RANDOM_COMMENTS_COUNT = 25;

const imageFilters = document.querySelector('.img-filters');

const removeElements = (elements) => {
  elements.forEach((element) => element.remove());
};

const rerenderPictures = (data, id) => {
  const dataCopy = data.slice();
  let sortArray = dataCopy;
  removeElements(document.querySelectorAll('.picture'));
  if (id === 'filter-discussed') {
    sortArray = dataCopy.sort((a, b) => a.comments.length - b.comments.length);
  }
  if (id === 'filter-random') {
    sortArray = shuffleArray(dataCopy).slice(0, RANDOM_COMMENTS_COUNT);
  }
  renderPictures(sortArray);
};

function onImageFiltersClick(event, data) {
  if (event.target.closest('.img-filters__button') && !event.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    event.target.classList.add('img-filters__button--active');
    const id = event.target.id;
    rerenderPictures(data, id);
  }
}

const initFilter = (data) => {
  imageFilters.classList.remove('img-filters--inactive');
  imageFilters.addEventListener('click', (event) => {
    onImageFiltersClick(event, data);
  });
  renderPictures(data);
};

export { initFilter };
