const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);

  greeting.classList.add(SHOWING_CN);

  const date = new Date();
  const hours = date.getHours();
  let mention = "Hello";
  if (0 < hours && hours <= 6) {
    mention = "Good night";
  } else if (6 < hours && hours <= 12) {
    mention = "Good morning";
  } else if (12 < hours && hours <= 18) {
    mention = "Good afternoon";
  } else {
    mention = "Good evening";
  }
  greeting.innerText = `${mention}, ${text}.`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
