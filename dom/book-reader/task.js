const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

fontSize.forEach((elem) => {
  elem.addEventListener("click", (e) => {
  e.preventDefault();
  
  fontSize.forEach((item) => {
    if (item.classList.contains("font-size_active")) {
      item.classList.toggle("font-size_active");
    }
  });
      
  elem.classList.toggle("font-size_active");
  
  if (elem.dataset.size === "small") {
    book.className = "book book_fs-small";
  } else if (elem.dataset.size === "big") {
      book.className = "book book_fs-big";
    } else {
        book.className = "book";
      }
  });
});