// Array para almacenar las personas
const people = [];

// Referencias a elementos del DOM
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const addButton = document.getElementById("addButton");
const errorContainer = document.getElementById("errorContainer");

// Función para validar los inputs
function validateInputs() {
  let isValid = true;
  const errors = [];

  // Validar nombre (no vacío y al menos 3 caracteres)
  if (!nameInput.value || nameInput.value.length < 3) {
    nameInput.classList.add("is-invalid");
    errors.push("El nombre debe tener al menos 3 caracteres");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }

  // Validar email (formato válido y no duplicado)
  if (!emailInput.value || !emailInput.value.includes("@")) {
    emailInput.classList.add("is-invalid");
    errors.push("El email no es válido");
    isValid = false;
  } else if (people.some(person => person.email === emailInput.value)) {
    emailInput.classList.add("is-invalid");
    errors.push("Este email ya está registrado");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
  }

  // Validar edad (entre 0 y 120)
  const age = Number(ageInput.value);
  if (!age || age < 0 || age > 120) {
    ageInput.classList.add("is-invalid");
    errors.push("La edad debe estar entre 0 y 120 años");
    isValid = false;
  } else {
    ageInput.classList.remove("is-invalid");
  }

  // Mostrar errores si existen
  if (errors.length > 0) {
    showError(errors.join("<br>"));
  } else {
    hideError();
  }

  return isValid;
}

// Función para mostrar errores
function showError(message) {
  errorContainer.innerHTML = message;
  errorContainer.classList.remove("d-none");
}

// Función para ocultar errores
function hideError() {
  errorContainer.classList.add("d-none");
}

// Event Listeners
addButton.addEventListener("click", () => {
  if (validateInputs()) {
    const newPerson = {
      name: nameInput.value,
      email: emailInput.value,
      age: Number(ageInput.value)
    };
    people.push(newPerson);
    updatePeopleList();
    form.reset();
  }
});

function deletePerson(emailToDelete) {
  const index = people.findIndex(p => p.email === emailToDelete);
  if (index !== -1) {
    people.splice(index, 1);
    updatePeopleList();
  }
}

// Función para actualizar la lista de personas
function updatePeopleList() {
  const peopleContainer = document.getElementById("peopleContainer");
  peopleContainer.innerHTML = ""; // Limpiamos el contenedor

  const peopleList = people.map(person => `
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Persona</h5>
            <button class="btn btn-danger btn-sm delete-person" onClick="deletePerson('${person.email}')">
              <i class="bi bi-trash"></i> X
            </button>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" value="${person.name}" readonly>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" value="${person.email}" readonly>
              </div>
              <div class="mb-3">
                <input type="number" class="form-control" value="${person.age}" readonly>
              </div>
            </form>
          </div>
        </div>
      `).join("");

  peopleContainer.innerHTML = peopleList;
}
