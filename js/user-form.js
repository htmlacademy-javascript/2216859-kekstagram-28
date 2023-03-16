const userForm = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('.img-upload__label');

uploadFile.addEventListener('click', onUploadFileClick);

const onUploadFileClick = (event) => {
  event.preventDefault();
  userForm.classList.remove('hidden');
};


