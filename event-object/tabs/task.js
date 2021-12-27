const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach(elem => {
  elem.addEventListener('click', (e) => {
    document.querySelector('.tab_active').classList.remove('tab_active');
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');

    elem.classList.add('tab_active');
    tabContent[tab.indexOf(e.target)].classList.add('tab__content_active');
  });
});