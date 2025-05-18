const table = document.getElementById("appointmentsTable").getElementsByTagName("tbody")[0];
const form = document.getElementById("appointmentsForm");

// Add new appointment
form.onsubmit = function(e) {
  e.preventDefault();

  const appointmentId = document.getElementById("appointmentId").value;
  const patientName = document.getElementById("patientName").value;
  const doctorName = document.getElementById("doctorName").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const status = document.getElementById("status").value;

  const row = table.insertRow();
  row.innerHTML = `
    <td>${appointmentId}</td>
    <td>${patientName}</td>
    <td>${doctorName}</td>
    <td>${date}</td>
    <td>${time}</td>
    <td>${status}</td>
    <td>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  attachActions(row);
  form.reset();
};

// Edit/Delete actions
function attachActions(row) {
  row.querySelector(".btn-edit").onclick = function() {
    const patientName = prompt("Edit Patient Name:", row.cells[1].textContent);
    const doctorName = prompt("Edit Doctor Name:", row.cells[2].textContent);
    const date = prompt("Edit Date (YYYY-MM-DD):", row.cells[3].textContent);
    const time = prompt("Edit Time:", row.cells[4].textContent);
    const status = prompt("Edit Status:", row.cells[5].textContent);

    if(patientName) row.cells[1].textContent = patientName;
    if(doctorName) row.cells[2].textContent = doctorName;
    if(date) row.cells[3].textContent = date;
    if(time) row.cells[4].textContent = time;
    if(status) row.cells[5].textContent = status;
  };

  row.querySelector(".btn-delete").onclick = function() {
    if(confirm("Are you sure you want to delete this appointment?")) {
      row.remove();
    }
  };
}

// Attach actions to existing rows
document.querySelectorAll("#appointmentsTable tbody tr").forEach(row => attachActions(row));
