const modal = document.getElementsByClassName('modal');
const modalClose = document.getElementsByClassName('modal__close');
const btnDanger = document.querySelector('.btn_danger');

modal[0].classList.add('modal_active');
[...modalClose].map(item => item.onclick = () => [...modal].map(item => item.classList.remove('modal_active')));

btnDanger.onclick = () => {
  modal[0].classList.remove('modal_active');
  modal[1].classList.add('modal_active');
}