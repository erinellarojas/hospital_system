// Show greeting based on time of day
function showGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "🌅 Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "☀️ Good Afternoon!";
  } else {
    greeting.textContent = "🌙 Good Evening!";
  }
}

// Example: Update dashboard statistics dynamically
function loadStats() {
  document.getElementById("totalPatients").textContent = 120;
  document.getElementById("totalAppointments").textContent = 35;
  document.getElementById("totalBills").textContent = 50;
  document.getElementById("totalUsers").textContent = 5;
}

// Example: Toggle Dark/Light mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Call functions on page load
window.onload = function() {
  showGreeting();
  loadStats();

  // Button for theme switch
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }
};
