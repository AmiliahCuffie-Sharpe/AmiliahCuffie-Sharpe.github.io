// ==== Theme toggle with persistence ====
(function () {
  const key = "katsTheme";
  const saved = localStorage.getItem(key);
  if (saved === "dark") document.body.classList.add("dark");

  const btn = document.querySelector(".theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(key, document.body.classList.contains("dark") ? "dark" : "light");
    });
  }
})();

// ==== Active nav highlighting ====
(function () {
  // Determine current file (default to index.html if empty)
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === file) a.classList.add("active");
  });
})();

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle mode and save choice
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
