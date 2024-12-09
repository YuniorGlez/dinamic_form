const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const addButton = document.getElementById("add-button");
const usersList = document.getElementById("users-list");

let users = [];

addButton.addEventListener("click", addUser);

function addUser(event) {
  console.log(event);

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

  const removeButtons = document.querySelectorAll("#remove-button");

  removeButtons.forEach(button => {
    button.addEventListener("click", deleteThisUserFromUsers);
  });
}

function generateHTMLForThisUser(user) {
  return `
        <div class="card">
            <div class="card-body">
                <div class="mb-3">
                <input id="name" value="${user.name}" readonly type="text" class="form-control">
                </div>
                <div class="mb-3">
                <input id="email" value="${user.email}" readonly type="email" class="form-control">
                </div>
                <div class="mb-3">
                <input id="age" value="${user.age}" readonly type="number" class="form-control">
                </div>
                <button data-email="${user.email}" id="remove-button" type="button" class="btn btn-danger">Bórrame</button>
            </div>
        </div>
    `;
}

function deleteThisUserFromUsers(event) {
  users = users.filter(u => u.email !== event.target.getAttribute("data-email"));
  printUsers();
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
