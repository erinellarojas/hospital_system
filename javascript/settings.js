// Save profile info
document.getElementById("saveProfile").onclick = function () {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  alert("✅ Profile updated!\nName: " + name + "\nEmail: " + email);
};

// Change password
document.getElementById("changePassword").onclick = function () {
  const current = document.getElementById("currentPass").value;
  const newPass = document.getElementById("newPass").value;
  const confirm = document.getElementById("confirmPass").value;

  if (!current || !newPass || !confirm) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  if (newPass !== confirm) {
    alert("❌ New password and confirm password do not match!");
  } else {
    alert("✅ Password updated successfully!");
  }
};

// Toggle Dark/Light Mode
document.getElementById("toggleTheme").onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    alert("🌙 Dark Mode Activated");
  } else {
    alert("☀️ Light Mode Activated");
  }
};
