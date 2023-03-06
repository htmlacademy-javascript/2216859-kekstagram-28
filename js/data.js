import { getRandomArrayElement, getRandomInteger } from './util';

const NAMES = ['Павел', 'Роман', 'Ирина', 'Мария', 'Егор', 'Рита'];

const DESCRIPTIONS = [
  'Прогулка после обеда',
  'Работа до седьмого пота',
  'Идем в кино',
  'Маргарин - не масло',
  'Единение с природой',
  'Распаковка подарков',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_COUNTER = 25;

let pictureId = 1;

let commentId = 1;

const createMessage = () => {
  const message = Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES));
  return [... new Set(message)].join(' ');
};

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
  commentId += 1;
  return comment;
};

const createPicture = () => {
  const picture = {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 250),
    comments: Array.from({ length: getRandomInteger(1, 3) }, createComment),
  };
  pictureId += 1;
  return picture;
};

const createPictures = () => Array.from({ length: PHOTO_COUNTER }, createPicture);

export { createPictures };
