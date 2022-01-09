const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close_times');

if (!document.cookie.includes('modal=closed'))
modal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    document.cookie = 'modal=closed';
});