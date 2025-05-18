const patientTable = document.getElementById("patientTable").getElementsByTagName("tbody")[0];
const patientForm = document.getElementById("patientForm");

// Add new patient
patientForm.onsubmit = function(e) {
  e.preventDefault();

  const patientId = document.getElementById("patientId").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;

  const row = patientTable.insertRow();
  row.innerHTML = `
    <td>${patientId}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${contact}</td>
    <td>${address}</td>
    <td>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  attachPatientActions(row);
  patientForm.reset();
};

// Edit/Delete actions
function attachPatientActions(row) {
  row.querySelector(".btn-edit").onclick = function() {
    const name = prompt("Edit Name:", row.cells[1].textContent);
    const age = prompt("Edit Age:", row.cells[2].textContent);
    const gender = prompt("Edit Gender:", row.cells[3].textContent);
    const contact = prompt("Edit Contact:", row.cells[4].textContent);
    const address = prompt("Edit Address:", row.cells[5].textContent);

    if(name) row.cells[1].textContent = name;
    if(age) row.cells[2].textContent = age;
    if(gender) row.cells[3].textContent = gender;
    if(contact) row.cells[4].textContent = contact;
    if(address) row.cells[5].textContent = address;
  };

  row.querySelector(".btn-delete").onclick = function() {
    if(confirm("Are you sure you want to delete this patient?")) {
      row.remove();
    }
  };
}

// Attach actions to existing rows
document.querySelectorAll("#patientTable tbody tr").forEach(row => attachPatientActions(row));
