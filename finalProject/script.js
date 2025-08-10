const canvas = document.getElementById("cakeCanvas");
const ctx = canvas.getContext("2d");

function drawCakeLayer(y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(125, y, 100, 25, 0, 0, Math.PI * 2);
  ctx.fill();
}

// Layers from bottom up
drawCakeLayer(150, "#5a3a2f"); // bottom brown
drawCakeLayer(130, "#b45f50"); // red
drawCakeLayer(110, "#5a3a2f"); // brown
drawCakeLayer(90, "#7d7f6e");  // green
drawCakeLayer(70, "#5a3a2f");  // top brown

// Cross cream decoration
ctx.fillStyle = "#e8e4d8";
ctx.beginPath();
ctx.ellipse(125, 70, 90, 8, 0, 0, Math.PI * 2); // horizontal
ctx.fill();

ctx.beginPath();
ctx.ellipse(125, 70, 8, 40, 0, 0, Math.PI * 2); // vertical
ctx.fill();

// Navigation between sections
const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".page-section");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");
    sections.forEach(section => {
      if (section.id === target) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
});
