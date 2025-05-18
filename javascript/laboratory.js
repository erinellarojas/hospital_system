const labTable = document.getElementById("labTable").getElementsByTagName("tbody")[0];
const labForm = document.getElementById("labForm");

// Add new lab test
labForm.onsubmit = function(e) {
  e.preventDefault();

  const labId = document.getElementById("labId").value;
  const patientName = document.getElementById("patientName").value;
  const testName = document.getElementById("testName").value;
  const date = document.getElementById("date").value;
  const result = document.getElementById("result").value || "Pending";
  const status = document.getElementById("status").value;

  const row = labTable.insertRow();
  row.innerHTML = `
    <td>${labId}</td>
    <td>${patientName}</td>
    <td>${testName}</td>
    <td>${date}</td>
    <td>${result}</td>
    <td>${status}</td>
    <td>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  attachLabActions(row);
  labForm.reset();
};

// Edit/Delete actions
function attachLabActions(row) {
  row.querySelector(".btn-edit").onclick = function() {
    const patientName = prompt("Edit Patient Name:", row.cells[1].textContent);
    const testName = prompt("Edit Test Name:", row.cells[2].textContent);
    const date = prompt("Edit Date (YYYY-MM-DD):", row.cells[3].textContent);
    const result = prompt("Edit Result:", row.cells[4].textContent);
    const status = prompt("Edit Status:", row.cells[5].textContent);

    if(patientName) row.cells[1].textContent = patientName;
    if(testName) row.cells[2].textContent = testName;
    if(date) row.cells[3].textContent = date;
    if(result) row.cells[4].textContent = result;
    if(status) row.cells[5].textContent = status;
  };

  row.querySelector(".btn-delete").onclick = function() {
    if(confirm("Are you sure you want to delete this test?")) {
      row.remove();
    }
  };
}

// Attach actions to existing rows
document.querySelectorAll("#labTable tbody tr").forEach(row => attachLabActions(row));
