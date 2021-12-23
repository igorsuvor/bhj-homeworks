const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'));
let sliderActive = 0;

document.querySelector('.slider__arrow_prev').onclick = () => {
  changeSlider(sliderActive - 1);
}

document.querySelector('.slider__arrow_next').onclick = () => {
  changeSlider(sliderActive + 1);
}

function changeSlider(slider) {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('slider__item_active');
    sliderDot[i].classList.remove('slider__dot_active');       
  }

  sliderActive = slider;

  if (sliderActive === sliderItems.length) sliderActive = 0;
  
  if (sliderActive === -1) sliderActive = sliderItems.length - 1;

  sliderItems[sliderActive].classList.add('slider__item_active');
  sliderDot[sliderActive].classList.add('slider__dot_active');
}

for (let i = 0; i < sliderDot.length; i++) {
  sliderDot[i].onclick = () => {
    sliderDot[i].classList.contains('slider__dot_active') ? false : changeSlider(i);
  }
}

