// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Alert Button
const alertButton = document.getElementById("alertButton");
if (alertButton) {
  alertButton.addEventListener("click", () => {
    alert("Welcome to DCK Technologies!");
  });
}
