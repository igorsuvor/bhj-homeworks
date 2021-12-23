const menuLink = Array.from(document.querySelectorAll('.menu__link'));
let menuActive;

menuLink.forEach(item => item.onclick = () => {
  const menuSub = item.closest('.menu__item').querySelector('.menu_sub');
  
  if (menuSub) {
    if (menuSub !== menuActive && menuActive) {
      menuActive.classList.remove('menu_active');
    }
    
    menuSub.classList.toggle('menu_active');
    menuActive = menuSub;

    return false;
  }
});
