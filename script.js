const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmePassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

const firstNameMsg = document.querySelector('.first-name-msg');
const lastNameMsg = document.querySelector('.last-name-msg');
const emailMsg = document.querySelector('.email-msg');
const phoneNumberMsg = document.querySelector('.phone-number-msg');
const passwordMsg = document.querySelector('.password-msg');
const confirmPasswordMsg = document.querySelector('.confirm-password-msg');

document.querySelector('.log-in').addEventListener('click', () => {
  alert('This is a fake online service!');
});

firstName.addEventListener('focus', () => {
  if (!firstName.value) {
    firstNameMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(firstNameMsg);
  }
});

firstName.addEventListener('keyup', () => {
  if (!firstName.value) {
    firstNameMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(firstNameMsg);
  } else if (firstName.value.length >= 30) {
    firstNameMsg.innerHTML = 'Too many characters!';
    colorMsgOnIncorrect(firstNameMsg);
  } else {
    firstNameMsg.innerHTML = 'Valid input';
    colorMsgOnCorrect(firstNameMsg);
  }
});

lastName.addEventListener('focus', () => {
  if (!lastName.value) {
    lastNameMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(lastNameMsg);
  }
});

lastName.addEventListener('keyup', () => {
  if (!lastName.value) {
    lastNameMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(lastNameMsg);
  } else if (lastName.value.length >= 30) {
    lastNameMsg.innerHTML = 'Too many characters!';
    colorMsgOnIncorrect(lastNameMsg);
  } else {
    lastNameMsg.innerHTML = 'Valid input';
    colorMsgOnCorrect(lastNameMsg);
  }
});

email.addEventListener('focus', () => {
  if (!email.value) {
    emailMsg.innerHTML = '@ symbol required (e.g. my@email.com)';
    colorMsgOnFocus(emailMsg);
  }
});

email.addEventListener('keyup', () => {
  if (!email.value) {
    emailMsg.innerHTML = '@ symbol required (e.g. my@email.com)';
    colorMsgOnFocus(emailMsg);
  } else if (/.@./.test(email.value)) {
    emailMsg.innerHTML = 'Valid input';
    colorMsgOnCorrect(emailMsg);
  } else {
    emailMsg.innerHTML = 'Must have form: my@email.com!';
    colorMsgOnIncorrect(emailMsg);
  }
});

phoneNumber.addEventListener('focus', () => {
  if (!phoneNumber.value) {
    phoneNumberMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(phoneNumberMsg);
  }
});

phoneNumber.addEventListener('keyup', () => {
  if (!phoneNumber.value) {
    phoneNumberMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(phoneNumberMsg);
  } else if (phoneNumber.value.length >= 30) {
    phoneNumberMsg.innerHTML = 'Too many characters!';
    colorMsgOnIncorrect(phoneNumberMsg);
  } else {
    phoneNumberMsg.innerHTML = 'Valid input';
    colorMsgOnCorrect(phoneNumberMsg);
  }
});

let passwordIsValid = false;

password.addEventListener('focus', () => {
  if (!password.value) {
    passwordMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(passwordMsg);
  }
});

password.addEventListener('keyup', () => {
  if (!password.value) {
    passwordMsg.innerHTML = 'Limited to 30 characters';
    colorMsgOnFocus(passwordMsg);
    passwordIsValid = false;
  } else if (password.value.length >= 30) {
    passwordMsg.innerHTML = 'Too many characters!';
    colorMsgOnIncorrect(passwordMsg);
    passwordIsValid = false;
  } else if (password.value.length >= 15) {
    passwordMsg.innerHTML = 'Strong password';
    colorMsgOnCorrect(passwordMsg);
    passwordIsValid = true;
  } else if (password.value.length >= 10) {
    passwordMsg.innerHTML = 'Ok password';
    passwordMsg.style.color = 'yellow';
    passwordIsValid = true;
  } else if (password.value.length >= 5) {
    passwordMsg.innerHTML = 'Weak password';
    passwordMsg.style.color = 'orange';
    passwordIsValid = true;
  } else {
    passwordMsg.innerHTML = 'Too short!';
    colorMsgOnIncorrect(passwordMsg);
    passwordIsValid = false;
  }
});

confirmePassword.addEventListener('focus', () => {
  if (!password.value) {
    confirmPasswordMsg.innerHTML = 'Please enter password first!';
    colorMsgOnFocus(confirmPasswordMsg);
  } else {
    confirmPasswordMsg.innerHTML = 'Please repeat password';
    colorMsgOnFocus(confirmPasswordMsg);
  }
});

confirmePassword.addEventListener('keyup', () => {
  if (!password.value && !confirmePassword.value) {
    confirmPasswordMsg.innerHTML = 'Please enter password first!';
    colorMsgOnFocus(confirmPasswordMsg);
  } else if (!password.value) {
    confirmPasswordMsg.innerHTML = 'Please enter password first!';
    colorMsgOnIncorrect(confirmPasswordMsg);
  } else if (passwordIsValid && password.value === confirmePassword.value) {
    confirmPasswordMsg.innerHTML = 'Valid input';
    colorMsgOnCorrect(confirmPasswordMsg);
  } else if (passwordIsValid) {
    confirmPasswordMsg.innerHTML = 'Please retype password!';
    colorMsgOnIncorrect(confirmPasswordMsg);

  } else {
    confirmPasswordMsg.innerHTML = 'Please retype password';
    colorMsgOnFocus(confirmPasswordMsg);
  }
});

function colorMsgOnFocus(msgElement) {
  msgElement.style.color = 'white';
}

function colorMsgOnCorrect(msgElement) {
  msgElement.style.color = 'var(--baseFontColor)';
}

function colorMsgOnIncorrect(msgElement) {
  msgElement.style.color = 'red';
}

function alertIncorrect() {
  alert('Please fill all required form fields with valid inputs!');
}

function colorBorderOnIncorrect(element) {
  element.style.border = '2px solid red';
}

/*
submitButton.addEventListener('click', () => {

  if (!firstName.value || firstName.value.length >= 30) {
    alertIncorrect();
    colorBorderOnIncorrect(firstName);
  }

  if (!lastName.value || lastName.value.length >= 30) {
    alertIncorrect();
  }

});
*/

// on document load
firstName.focus();