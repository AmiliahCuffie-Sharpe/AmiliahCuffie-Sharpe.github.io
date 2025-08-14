const body = document.body;
const toggleBtn = document.getElementById("toggleMode");

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

// Fade-in animation on scroll
const sections = document.querySelectorAll(".fade-section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
