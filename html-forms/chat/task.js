const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const botMessages = [
        'Доброй ночи!',
        'Отвечу, если ответишь на 3 вопроса',
        'Повторите Ваше сообщение',
        'Вы не чётко пишете',
        'Сколько, сколько?',
        'До свидания, у меня другие дела',
        'Почему Вы сюда пишите',
        'Возможно ответ в Вашем вопросе',
        'Перейдём на Ты?'
      ];

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && chatWidgetInput.value !== '') {
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${chatWidgetInput.value}</div>       
      </div> 
    `
    chatWidgetInput.value = '';

    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${botMessages[Math.floor(Math.random() * botMessages.length)]}</div>
      </div>
    `
  }
});