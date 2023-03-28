const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const loadingMessageTemplate = document.querySelector('#messages').content.querySelector('.messages');

const successMessageBlock = successMessageTemplate.cloneNode(true);
const errorMessageBlock = errorMessageTemplate.cloneNode(true);

const closeErrorMessageButton = document.querySelector('.error__button');
const closeSuccesMessageButton = document.querySelector('.success__button');

const onCloseSuccesMessageButtonClick = (event) => {
  event.preventDefault();
  closeSuccessMessage();
};

const onCloseErrorMessageButtonClick = (event) => {
  event.preventDefault();
  closeErrorMessage();
};

function closeSuccessMessage() {
  successMessageBlock.remove();
  closeSuccesMessageButton.removeEventListener('click', onCloseSuccesMessageButtonClick);
}
function closeErrorMessage() {
  errorMessageBlock.remove();
  closeErrorMessageButton.removeEventListener('click', onCloseErrorMessageButtonClick);
}

const showSuccessMessage = () => {
  document.body.appendChild(successMessageBlock);
  closeSuccesMessageButton.addEventListener('click', onCloseSuccesMessageButtonClick);
};

const showErrorMessage = () => {
  document.body.append(errorMessageBlock);
  closeErrorMessageButton.addEventListener('click', onCloseErrorMessageButtonClick);
};

const showLoadingMessage = () => {
  const loadingMessageBlock = loadingMessageTemplate.cloneNode(true);
  document.body.appendChild(loadingMessageBlock);
};

export { showErrorMessage, showSuccessMessage, showLoadingMessage, closeSuccessMessage, closeErrorMessage };
