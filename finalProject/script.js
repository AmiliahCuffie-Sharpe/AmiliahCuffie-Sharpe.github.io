// Draw cake
const canvas = document.getElementById("cakeCanvas");
const ctx = canvas.getContext("2d");

function drawCakeLayer(y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(125, y, 100, 25, 0, 0, Math.PI * 2);
  ctx.fill();
}

drawCakeLayer(150, "#5a3a2f");
drawCakeLayer(130, "#b45f50");
drawCakeLayer(110, "#5a3a2f");
drawCakeLayer(90, "#7d7f6e");
drawCakeLayer(70, "#5a3a2f");

ctx.fillStyle = "#e8e4d8";
ctx.beginPath();
ctx.ellipse(125, 70, 90, 8, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(125, 70, 8, 40, 0, 0, Math.PI * 2);
ctx.fill();

// Navigation
const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".page-section");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");
    document.querySelector(".page-section:not(.hidden)").classList.add("hidden");
    setTimeout(() => {
      sections.forEach(section => {
        if (section.id === target) section.classList.remove("hidden");
      });
    }, 500);
  });
});

// Feedback system
const feedbackText = document.getElementById("feedbackText");
const feedbackButton = document.getElementById("submitFeedback");
const feedbackMessage = document.getElementById("feedbackMessage");
const reviewList = document.getElementById("reviewList");

feedbackButton.addEventListener("click", () => {
  const text = feedbackText.value.trim();
  if (text) {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "bg-warning");
    li.textContent = text;
    reviewList.appendChild(li);

    setTimeout(() => li.classList.remove("bg-warning"), 2000);

    feedbackMessage.classList.remove("hidden");
    feedbackText.value = "";
    setTimeout(() => feedbackMessage.classList.add("hidden"), 3000);
  } else {
    alert("Please enter your feedback before submitting.");
  }
});

// Contact form
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactMessage.classList.remove("hidden");
  contactForm.reset();
  setTimeout(() => contactMessage.classList.add("hidden"), 4000);
});

// Back to Top
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
