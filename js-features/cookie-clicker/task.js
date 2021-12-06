const element = document.getElementById('clicker__counter');
const elementCookie = document.getElementById('cookie');

elementCookie.onclick = function() {
  element.textContent ++;
  element.textContent % 2 === 1 ? elementCookie.width = 250 : elementCookie.width = 200;
}