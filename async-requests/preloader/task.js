const loader = document.querySelector('.loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText).response.Valute;
    for (let key in data) {
      items.innerHTML += 
        `<div class="item">
          <div class="item__code">${data[key].CharCode}</div>         
          <div class="item__value">${data[key].Value}</div>         
          <div class="item__currency">руб.</div>
        </div>`
    }
    loader.classList.remove('loader_active');
  }
});