const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const addButton = document.getElementById("add-button");
const usersList = document.getElementById("users-list");

addButton.addEventListener("click", addUser);

function addUser() {
  alert("Detecto el click en añadir");
}
