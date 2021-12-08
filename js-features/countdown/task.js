// Таймер обратного отсчёта
function startTimer() {
  const elementMain = document.getElementById('timer');

  const timer = setInterval(() => {
    elementMain.textContent --;
    if (+elementMain.textContent === 0) {
      clearInterval(timer);
      alert('Вы победили в конкурсе!')
    }
  }, 1000);
}

startTimer();


// Повышенный уровень сложности #1
/*
const outTimer = document.getElementById('timer');

const element = setInterval(() => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (sec < 10) sec = '0' + sec;
  
  outTimer.innerHTML = '' + hour + ':' + minute + ':' + sec + '';  
}, 1000);
*/