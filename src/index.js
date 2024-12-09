const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const addButton = document.getElementById("add-button");
const usersList = document.getElementById("users-list");

const users = [];

addButton.addEventListener("click", addUser);

function addUser() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim().toLowerCase();
  const ageValue = parseInt(age.value);

  if (!validateName(nameValue)) {
    return;
  }
  if (!validateEmail(emailValue)) {
    return;
  }
  if (!validateAge(ageValue)) {
    return;
  }

  const user = {
    name: nameValue,
    email: emailValue,
    age: ageValue,
  };

  users.push(user);

  console.log(`Tenemos ${users.length} usuarios`);
}

function validateName(name) {
  return (name && name.length >= 3);
}

function validateEmail(email) {
  return true;
}
function validateAge(age) {
  return true;
}
