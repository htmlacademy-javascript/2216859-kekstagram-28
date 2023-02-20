//Проверка длины строки
const checkLenght = (string, length) => string.length >= length;

//Проверка на палиндром
function isPalindrom (string) {
  string = string.toLowerCase().replace(/ /g,'');
  const lastIndex = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] == string[lastIndex - i]) {
      return 'Это палиндром';
    }
    return 'Это не палиндром';
  }
}

const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', ''); //заменяем  все пробелы на пустой символ, тем самым избавляясь от пробелов

  let reverseString ='';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
    return tempString === reverseString;
  }
}

//Извлечение цифр из строки
//Вариант №1
function extractNumber (string) {
  string = String(string);
  string = string.replace(/[^0-9]/g, '');
  if (string.length !== 0) {
  return parseInt(string);
  }
  return NaN;
}

//Вариант №2
const extrNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10)))
    result += string.at(i);
  }
  return parseInt(result, 10);
}

//Функциия с 3 параметрами
//Вариант №1 (не выполняет одно из условий)
function noPad (string, targetLength, extraString) {
  let extraLenght = targetLength - string.length;
  if (string.length > targetLength) {
    return string;
  }
  var extraString = extraString.repeat(extraLenght);
  var newString = extraString.slice(0, extraLenght) + string;
  return newString;
}


//Вариант №2 Полифил
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad  + tempRepeat + string;
}

//Вариант №3 через циклы
const PadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLenght = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLenght);
    result = actualPad + result;
  }
  return result;
}
