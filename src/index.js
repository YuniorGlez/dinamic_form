const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const addButton = document.getElementById("add-button");
const usersList = document.getElementById("users-list");

let users = [];

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
                <button type="button" onClick="deleteThisUserFromUsers('${user.email}')" class="btn btn-danger">Bórrame</button>
            </div>
        </div>
    `;
}

function deleteThisUserFromUsers(email) {
  users = users.filter(user => user.email !== email);
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
