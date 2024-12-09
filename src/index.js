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
    console.log("Tienes un error en el name");

    return;
  }
  if (!validateEmail(emailValue)) {
    console.log("Tienes un error en el email");

    return;
  }
  if (!validateAge(ageValue)) {
    console.log("Tienes un error en el age");

    return;
  }

  storeUserInMemory(nameValue, emailValue, ageValue);
  printUsers();
  resetForm();
}

function printUsers() {
  usersList.innerHTML = "";
  users.forEach(user => {
    usersList.innerHTML += generateHTMLForThisUser(user);
  });
}

}

function storeUserInMemory(nameValue, emailValue, ageValue) {
  const user = {
    name: nameValue,
    email: emailValue,
    age: ageValue,
  };

  users.push(user);
}

function resetForm() {
  name.value = "";
  email.value = "";
  age.value = "";
}

function validateName(name) {
  return (name && name.length >= 3);
}

function validateEmail(email) {
  return (email && email.length > 4 && email.includes("@"));
}
function validateAge(age) {
  return (age >= 1 && age <= 150);
}
