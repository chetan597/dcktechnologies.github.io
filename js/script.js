// js/script.js

// Example: Alert on button click
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#alertButton");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("Welcome to DCK Technologies!");
    });
  }
});

// Toggle Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
