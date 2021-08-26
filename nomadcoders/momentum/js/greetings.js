const loginForm = document.querySelector("#login-form");
const inputText = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const css = {
  HIDDEN: "hidden",
};
const field = {
  USERNAME: "name",
};

function showGreeting() {
  greeting.innerText = `Hello ${localStorage.getItem(field.USERNAME)}`;
  loginForm.classList.add(css.HIDDEN);
  greeting.classList.remove(css.HIDDEN);
}
function showForm() {
  loginForm.classList.remove(css.HIDDEN);
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem(field.USERNAME, inputText.value);
  showGreeting();
});

const savedName = localStorage.getItem(field.USERNAME);
if (savedName && savedName.length) {
  showGreeting();
} else {
  showForm();
}
