const minus = [...document.querySelectorAll('.product__quantity-control_dec')];
const plus = [...document.querySelectorAll('.product__quantity-control_inc')];
const productAdd = [...document.querySelectorAll('.product__add')];
const cartProducts = document.querySelector('.cart__products');

minus.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.nextElementSibling.innerHTML--;
      if(elem.nextElementSibling.innerHTML < 1) {
        elem.nextElementSibling.innerHTML = 1;
      }
  });
});

plus.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.previousElementSibling.innerHTML++;
  });
});

productAdd.forEach((elem) => {
  elem.addEventListener('click', () => {
    const product = elem.closest('.product');
    const productID = product.dataset.id;
    const cartProduct = [...document.querySelectorAll('.cart__product')];
    const productImg = product.querySelector('img').src;
    const productQuantity = product.querySelector('.product__quantity-value');

    cartProduct.find(elem => productID == elem.dataset.id);
    if (cartProduct.find(elem => productID == elem.dataset.id) == undefined) {

      cartProducts.insertAdjacentHTML('beforeend',
        `<div class="cart__product" data-id="${productID}">
          <img class="cart__product-image" src ="${productImg}">
          <div class="cart__product-count">${productQuantity.innerHTML}</div>
        </div>`
        )
    } else {
        const addElement = cartProduct.find(elem => productID == elem.dataset.id);
        const addValue = addElement.lastElementChild;
        addValue.innerHTML = +addValue.innerHTML + +productQuantity.innerHTML;
    }
  });
});