const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type','application/json');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === 4) {
    pollTitle.insertAdjacentHTML('beforeend', `${xhr.response.data.title}`);
  }
  xhr.response.data.answers.forEach(element => {
    pollAnswers.insertAdjacentHTML('beforeend', 
    `<button class="poll__answer">
      ${element}
    </button> `
    );
  });
  const pollAnswersArr = [...document.querySelector('.poll__answers')];
  pollAnswersArr.forEach(element => {
    element.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
    });
  });
});