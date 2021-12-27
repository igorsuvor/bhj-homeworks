const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.addEventListener('click', function () {
  dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItem.forEach(elem => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownValue.textContent = elem.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  });
});

