const element = document.getElementById('clicker__counter');
const elementCookie = document.getElementById('cookie');

elementCookie.onclick = function() {
  element.textContent ++;
  elementCookie.width = element.textContent % 2 === 1 ? 250 : 200;
}