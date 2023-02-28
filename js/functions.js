const checkLength = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
};

const extractNumber = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

const createNewString = (string, minLength, additionalText) => {
  while (string.length < minLength) {
    string = additionalText.slice(0, minLength - string.length) + string;
  }
  return string;
};
