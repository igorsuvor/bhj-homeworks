// Задание mole-game | Игра «Убей кротов»

const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
  const incident = getHole(i);
  
  incident.onclick = () => {
    if (incident.classList.contains('hole_has-mole')) {
      dead.textContent ++;
      if (+dead.textContent === 10) {
        setResetCounter();
        alert ('Победа!')
      }
    } else {
        lost.textContent ++;
        if (+lost.textContent === 5) {
          setResetCounter();
          alert ('Проигрыш :(')
        }
      }
  }

  setResetCounter = () => {
    dead.textContent = 0;
    lost.textContent = 0;
  }

}