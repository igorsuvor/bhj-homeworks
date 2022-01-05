const interests = document.querySelector('.interests');

interests.addEventListener('click', (event) => {
  const subElements = Array.from(event.target.closest('.interest').querySelectorAll('.interest__check'));
   subElements.forEach(elem => elem.checked = subElements[0].checked)
});