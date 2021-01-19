const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const password = document.getElementById("password");
const passwordPass = document.getElementById("password-pass");
const email = document.getElementById("email");
const emailPass = document.getElementById("email-pass");
const check = document.getElementById("check");
const checkPass = document.getElementById("check-pass");
const submit = document.getElementById("submit");
const username = document.getElementById("username");
const userPass = document.getElementById("username-pass");
let passArray = [false, false, false, false];
function checkusername() {
  if (username.value.length) {
    userPass.classList.remove("hidden");
    userPass.classList.add("pass");
    userPass.classList.remove("fail");
    passArray[0] = true;
    if (passArray.every((item) => item === true)) {
      submit.disabled = false;
    }
  } else {
    userPass.classList.add("hidden");
    submit.disabled = true;
  }
}
function checkemail() {
  if (emailRegex.test(email.value)) {
    emailPass.classList.remove("hidden");
    emailPass.classList.add("pass");
    emailPass.classList.remove("fail");
    passArray[1] = true;
    if (passArray.every((item) => item === true)) {
      submit.disabled = false;
    }
  } else if (email.value.length !== 0) {
    emailPass.classList.remove("hidden");
    emailPass.classList.add("fail");
    emailPass.classList.remove("pass");
    passArray[1] = false;
    submit.disabled = true;
  } else emailPass.classList.add("hidden");
}
function checkpassword() {
  if (passwordRegex.test(password.value)) {
    passwordPass.classList.remove("hidden");
    passwordPass.classList.add("pass");
    passwordPass.classList.remove("fail");
    passArray[2] = true;
    if (passArray.every((item) => item === true)) {
      submit.disabled = false;
    }
  } else if (password.value.length !== 0) {
    passwordPass.classList.remove("hidden");
    passwordPass.classList.add("fail");
    passwordPass.classList.remove("pass");
    passArray[2] = false;
    submit.disabled = true;
  } else passwordPass.classList.add("hidden");
}
function checkMatching() {
  if (password.value === check.value && passwordRegex.test(password.value)) {
    checkPass.classList.remove("hidden");
    checkPass.classList.add("pass");
    checkPass.classList.remove("fail");
    passArray[3] = true;
    if (passArray.every((item) => item === true)) {
      submit.disabled = false;
    }
  } else if (check.value.length !== 0) {
    checkPass.classList.remove("hidden");
    checkPass.classList.add("fail");
    checkPass.classList.remove("pass");
    passArray[3] = true;
    submit.disabled = true;
  } else checkPass.classList.add("hidden");
}
