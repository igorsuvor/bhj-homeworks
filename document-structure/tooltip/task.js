const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const divTooltip = document.createElement('div');

hasTooltip.forEach((elem) => {
  elem.addEventListener('click', () => {
    divTooltip.className = 'tooltip tooltip_active';
    divTooltip.setAttribute('style', `left: ${elem.getBoundingClientRect().left}px; top: ${elem.getBoundingClientRect().bottom}px`);
    divTooltip.textContent = `${elem.title}`;
    elem.insertAdjacentElement('afterend', divTooltip);
    event.preventDefault();
  });
});
