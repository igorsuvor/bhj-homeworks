const modal = document.getElementsByClassName('modal');
const modalClose = Array.from(document.getElementsByClassName('modal__close_times'));
const btnDanger = document.querySelector('.btn_danger');

modal[0].classList.add('modal_active');

btnDanger.onclick = () => {
  modal[0].classList.remove('modal_active');
  modal[1].classList.add('modal_active');
}

modalClose.forEach(elem => elem.onclick = function () {
  this.closest('.modal').classList.remove('modal_active')
});

