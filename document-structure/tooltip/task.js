const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const divTooltip = document.createElement('div');

hasTooltip.forEach((elem) => {
  elem.addEventListener('click', () => {
    event.preventDefault();
    const aktiveTooltip = event.target.querySelector('.tooltip');

    if (!aktiveTooltip) {
      divTooltip.setAttribute('style', 
      `left: ${elem.getBoundingClientRect().left}px; 
      top: ${elem.getBoundingClientRect().bottom}px`
      );
    
      divTooltip.classList.add('tooltip', 'tooltip_active');
      divTooltip.textContent = `${elem.title}`;
      event.target.insertAdjacentElement('afterBegin', divTooltip);
    } else {
      aktiveTooltip.remove();
    }
  });
});