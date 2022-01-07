const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const divTooltip = document.createElement('div');

hasTooltip.forEach((elem) => {
  elem.addEventListener('click', () => {
    divTooltip.classList.add('tooltip');
    divTooltip.classList.toggle('tooltip_active');

    divTooltip.setAttribute('style', 
    `left: ${elem.getBoundingClientRect().left}px; 
    top: ${elem.getBoundingClientRect().bottom}px`
    );

    divTooltip.textContent = `${elem.title}`;
    elem.insertAdjacentElement('afterend', divTooltip);
    event.preventDefault();
  });
});
