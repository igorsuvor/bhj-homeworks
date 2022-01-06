const tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

tasksAdd.addEventListener('click', (elem) => {
  elem.preventDefault();

  if (tasksInput.value != '') {
    tasksList.insertAdjacentHTML('beforeEnd', 
      `<div class='task'>
        <div class='task__title'>
          ${tasksInput.value}
        </div >
        <a href='#' class='task__remove'>&times;</a>
      </div >`
    )

    tasksList.addEventListener('click', event => {
      event.preventDefault();
        if (event.target.classList.contains('task__remove')) {
          event.target.parentElement.remove();
        }
    });
    tasksInput.value = '';
  }

});


