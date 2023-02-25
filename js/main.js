function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const NAMES = [
  'Павел',
  'Роман',
  'Ирина',
  'Мария',
  'Егор',
  'Рита',
];

const DESCRIPTION = [
  'Прогулка после обеда',
  'Работа до седьмого пота',
  'Идем в кино',
  'Маргарин - не масло',
  'Единение с природой',
  'Распаковка подарков',
];

const textMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createComment = () => ({
  id: getRandomInteger (1, 999),
  avatar: `img/avatar-${ getRandomInteger (1, 6) }.svg`,
  message: getRandomArrayElement(textMessage),
  name: getRandomArrayElement(NAMES),
});

// const comments = Array.from({length:3}, createComment);

const createObject = () => ({
  id: getRandomInteger (1, 25),
  url: `photos/${ getRandomInteger (1, 25) }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger (15, 250),
  comments: createComment(),
});

const otherObjects = Array.from({length: 25}, createObject);

console.log(otherObjects);
