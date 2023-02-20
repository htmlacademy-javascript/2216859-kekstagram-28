//Проверка длины строки
function checkLenght (string, minLength) {
  return (string.length >= minLength) ? 'строка проходит по длине' : 'строка не проходит';
}

//Проверка на палиндром
function checkPalindrome (string) {
  string = string.toLowerCase().replace(/ /g,'');
  const lastIndex = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] == string[lastIndex - i]) {
      return console.log('Это палиндром');
    }
    return console.log('Это не палиндром');
  }
}

//Извлечение чисел из строки
function getNumbers (string) {
  string = String(string);
  string = string.replace(/[^0-9]/g, '');
  if (string.length !== 0) {
  return string;
  }
  return NaN;
}

//Функциия с 3 параметрами
function noPadStart(string, targetLength, padString) {
  if (string.length > targetLength) {
    return string;
  }
  let padString = padString.repeat(targetLength - string.length);
  let newString = padString.slice(0, targetLength - string.length) + string;
  return newString;
}
