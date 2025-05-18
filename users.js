const addUserBtn = document.getElementById("addUser");
const userList = document.getElementById("userList");

addUserBtn.onclick = function () {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const role = document.getElementById("userRole").value;

  if (!name || !email) {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${role}</td>
    <td><button class="deleteBtn">❌ Delete</button></td>
  `;

  // Add delete functionality
  row.querySelector(".deleteBtn").onclick = function () {
    row.remove();
    alert("🗑️ User deleted!");
  };

  userList.appendChild(row);

  // Clear input fields
  document.getElementById("userName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userRole").value = "Admin";

  alert("✅ User added successfully!");
};
