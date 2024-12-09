// Array para almacenar las personas
const people = [];


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
