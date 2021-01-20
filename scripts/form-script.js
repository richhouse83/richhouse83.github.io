const usernames = [
  "richhouse83",
  "richhouse",
  "a",
  "abc",
  "user1",
  "user123",
  "notARealUser",
  "qwerty",
  "iAmGod",
];
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
  if (username.value.length > 4) {
    if (usernames.every((user) => user !== username.value)) {
      pass(userPass, 0);
    } else {
      fail(userPass, 0);
    }
  } else if (username.value.length > 0) {
    fail(userPass, 0);
  } else {
    userPass.classList.add("hidden");
    submit.disabled = true;
  }
}

function checkemail() {
  if (emailRegex.test(email.value)) {
    pass(emailPass, 1);
  } else if (email.value.length !== 0) {
    fail(emailPass, 1);
  } else emailPass.classList.add("hidden");
}

function checkpassword() {
  if (passwordRegex.test(password.value)) {
    pass(passwordPass, 2);
  } else if (password.value.length !== 0) {
    fail(passwordPass, 2);
  } else passwordPass.classList.add("hidden");
}

function checkMatching() {
  if (password.value === check.value && passwordRegex.test(password.value)) {
    pass(checkPass, 3);
  } else if (check.value.length !== 0) {
    fail(checkPass, 3);
  } else checkPass.classList.add("hidden");
}

function pass(element, arrayNo) {
  element.classList.remove("hidden");
  element.classList.add("pass");
  element.classList.remove("fail");
  passArray[arrayNo] = true;
  if (passArray.every((item) => item === true)) {
    submit.value = "OK! Submit";
    submit.disabled = false;
  }
}

function fail(element, arrayNo) {
  element.classList.remove("hidden");
  element.classList.add("fail");
  element.classList.remove("pass");
  passArray[arrayNo] = true;
  submit.disabled = true;
  submit.value = "Complete Form";
}
