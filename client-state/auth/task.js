const signinActive = document.getElementById("signin");
const welcomeForm = document.getElementById("welcome");
const userID = document.getElementById("user_id");

const signinState = (answer) => {
  if (answer !== null && answer.success === true) {
    signinActive.classList.remove("signin_active");
    welcomeForm.classList.add("welcome_active");
    userID.textContent = answer.user_id;

    localStorage.setItem(
      `user`,
      JSON.stringify({
        user_id: answer.user_id,
      })
    );
  } else if (answer !== null && answer.success === false) {
    alert(`Неверный логин/пароль`);
    uploadForm.reset();
  } else {
    if (localStorage.user !== undefined) {
      welcomeForm.classList.add("welcome_active");
      signinActive.classList.remove("signin_active");
      userID.textContent = JSON.parse(localStorage.user).user_id;
      return;
    }
    signinActive.classList.add("signin_active");
    welcomeForm.classList.remove("welcome_active");
  }
};
signinState(null);

const uploadForm = document.getElementById(`signin__form`);
uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let request = new XMLHttpRequest();
  let formData = new FormData(uploadForm);

  request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  request.send(formData);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      signinState(JSON.parse(request.responseText));
    }
  };
});

const clearButton = document.querySelector(`.clear`);
clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem(`user`);
  signinState(null);
});