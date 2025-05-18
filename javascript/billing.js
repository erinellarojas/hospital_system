const billingTable = document.getElementById("billingTable").getElementsByTagName("tbody")[0];
const billingForm = document.getElementById("billingForm");

// Add new bill
billingForm.onsubmit = function(e) {
  e.preventDefault();

  const billId = document.getElementById("billId").value;
  const patientName = document.getElementById("patientName").value;
  const amount = document.getElementById("amount").value;
  const dateIssued = document.getElementById("dateIssued").value;
  const status = document.getElementById("status").value;

  const row = billingTable.insertRow();
  row.innerHTML = `
    <td>${billId}</td>
    <td>${patientName}</td>
    <td>₱${amount}</td>
    <td>${dateIssued}</td>
    <td>${status}</td>
    <td>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  attachBillActions(row);
  billingForm.reset();
};

// Edit/Delete actions
function attachBillActions(row) {
  row.querySelector(".btn-edit").onclick = function() {
    const patientName = prompt("Edit Patient Name:", row.cells[1].textContent);
    const amount = prompt("Edit Amount:", row.cells[2].textContent.replace("₱", ""));
    const dateIssued = prompt("Edit Date (YYYY-MM-DD):", row.cells[3].textContent);
    const status = prompt("Edit Status:", row.cells[4].textContent);

    if (patientName) row.cells[1].textContent = patientName;
    if (amount) row.cells[2].textContent = "₱" + amount;
    if (dateIssued) row.cells[3].textContent = dateIssued;
    if (status) row.cells[4].textContent = status;
  };

  row.querySelector(".btn-delete").onclick = function() {
    if (confirm("Are you sure you want to delete this bill?")) {
      row.remove();
    }
  };
}

// Attach actions to existing rows
document.querySelectorAll("#billingTable tbody tr").forEach(row => attachBillActions(row));
