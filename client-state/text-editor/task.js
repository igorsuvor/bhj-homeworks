const editor = document.getElementById('editor');
editor.textContent = localStorage.text;

editor.addEventListener('keyup', () => {
  localStorage.setItem('text', editor.value);
});