// Get button
const modeToggle = document.getElementById("modeToggle");

// Load saved mode or default to light
const savedMode = localStorage.getItem("mode") || "light";
document.body.classList.add(savedMode + "-mode");
updateButtonIcon(savedMode);

// Toggle mode
modeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("mode", "dark");
    updateButtonIcon("dark");
  } else {
    document.body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("mode", "light");
    updateButtonIcon("light");
  }
});

function updateButtonIcon(mode) {
  modeToggle.textContent = mode === "light" ? "🌙" : "☀️";
}
