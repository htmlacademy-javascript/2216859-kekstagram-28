const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

let failMessageClone;
let successMessageClone;

const onDocumentKeydown = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
  }
  if (failMessageClone) {
    closeFailMessage();
    return;
  }
  closeSuccessMessage();
};

const onSuccessMessageButtonClick = () => closeSuccessMessage();
const onFailMessageButtonClick = () => closeFailMessage();


function closeSuccessMessage() {
  successMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  successMessageClone = '';
}

function closeFailMessage() {
  failMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  failMessageClone = '';
}

const showSuccessMessage = () => {
  successMessageClone = successMessageTemplate.cloneNode(true);
  document.body.appendChild(successMessageClone);
  successMessageClone.querySelector('.success__button').addEventListener('click', onSuccessMessageButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const showFailMessage = () => {
  failMessageClone = failMessageTemplate.cloneNode(true);
  document.body.append(failMessageClone);
  failMessageClone.querySelector('.error__button').addEventListener('click', onFailMessageButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { showFailMessage, showSuccessMessage };
