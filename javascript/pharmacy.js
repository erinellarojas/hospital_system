const medicineTable = document.getElementById("medicineTable").getElementsByTagName("tbody")[0];
const medicineForm = document.getElementById("medicineForm");

// Add new medicine
medicineForm.onsubmit = function(e) {
  e.preventDefault();

  const medicineId = document.getElementById("medicineId").value;
  const medName = document.getElementById("medName").value;
  const category = document.getElementById("category").value;
  const stock = document.getElementById("stock").value;
  const price = document.getElementById("price").value;
  const expiry = document.getElementById("expiry").value;

  const row = medicineTable.insertRow();
  row.innerHTML = `
    <td>${medicineId}</td>
    <td>${medName}</td>
    <td>${category}</td>
    <td>${stock}</td>
    <td>${price}</td>
    <td>${expiry}</td>
    <td>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  attachMedicineActions(row);
  medicineForm.reset();
};

// Edit/Delete actions
function attachMedicineActions(row) {
  row.querySelector(".btn-edit").onclick = function() {
    const medName = prompt("Edit Name:", row.cells[1].textContent);
    const category = prompt("Edit Category:", row.cells[2].textContent);
    const stock = prompt("Edit Stock:", row.cells[3].textContent);
    const price = prompt("Edit Price:", row.cells[4].textContent);
    const expiry = prompt("Edit Expiry Date:", row.cells[5].textContent);

    if(medName) row.cells[1].textContent = medName;
    if(category) row.cells[2].textContent = category;
    if(stock) row.cells[3].textContent = stock;
    if(price) row.cells[4].textContent = price;
    if(expiry) row.cells[5].textContent = expiry;
  };

  row.querySelector(".btn-delete").onclick = function() {
    if(confirm("Are you sure you want to delete this medicine?")) {
      row.remove();
    }
  };
}

// Attach actions to existing rows
document.querySelectorAll("#medicineTable tbody tr").forEach(row => attachMedicineActions(row));
