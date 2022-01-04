setInterval(() => {
  const rotatorCaseActive = document.querySelector(".rotator__case_active");
  const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
    
  rotatorCase.forEach(item => item.style.color = item.getAttribute('data-color'));
  
  rotatorCaseActive.classList.remove("rotator__case_active");
  
  rotatorCaseActive.nextElementSibling === null ? rotatorCaseActive.parentElement.children[0].classList.add("rotator__case_active") :
  rotatorCaseActive.nextElementSibling.classList.add("rotator__case_active");
    
}, 1000);