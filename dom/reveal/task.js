const reveal = Array.from(document.querySelectorAll('.reveal'));
const viewHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  reveal.forEach(item => {
    const elementTop = item.getBoundingClientRect().top;
    elementTop > 0 && elementTop < viewHeight ? item.classList.add('reveal_active') : item.classList.remove('reveal_active');
  });
});