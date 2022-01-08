const send = document.getElementById('send');
const form = document.getElementById('form');
const progress = document.getElementById('progress');

send.addEventListener('click', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  
  xhr.upload.addEventListener('progress', (e) => {
    progress.value = e.loaded / e.total;
  });
  xhr.send(new FormData(form));
});