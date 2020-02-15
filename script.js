const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const minUserNameLength = 3;
const minPasswordLength = 3;

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(input) {
  if (input.value === "") {
    showError(input, input.id + " is required");
    return false;
  }
  return true;
}

function checkLength(input) {
  const inputText = input.value;
  switch (input) {
    case username:
      if (username.value.length < minUserNameLength) {
        showError(
          input,
          input.id + " must be at least " + minUserNameLength + " characters"
        );
        return false;
      }
      return true;
      break;
    case password:
      if (input.value.length < minPasswordLength) {
        showError(
          input,
          input.id + " must be at least " + minPasswordLength + " characters"
        );
        return false;
      }
      return true;
  }
}

function checkEmail(input) {
  const emailAddress = email.value;
  const regEx = /\S+@\S+\.\S+/;
  console.log(regEx.test(emailAddress));
  if (!regEx.test(emailAddress)) {
    showError(email, "Email address has the wrong format");
    return false;
  }
  return true;
}

function comparePasswords(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input1, "Passwords do not match");
    showError(input2, "Passwords do not match");
    return false;
  }
  return true;
}

//Event Listener
form.addEventListener("submit", e => {
  e.preventDefault();

  if (checkRequired(username) && checkLength(username)) {
    showSuccess(username);
  }

  if (checkRequired(email) && checkEmail(email)) {
    showSuccess(email);
  }

  if (
    checkRequired(password) &&
    checkLength(password) &&
    comparePasswords(password, password2)
  ) {
    showSuccess(password);
    showSuccess(password2);
  }
});
