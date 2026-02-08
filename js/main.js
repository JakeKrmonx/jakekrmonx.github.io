// ====== TEMA CLARO / OSCURO ======
const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// función para actualizar ícono
function updateIcon(theme) {
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

// cargar preferencia guardada
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-bs-theme", savedTheme);
updateIcon(savedTheme);

// toggle
toggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(section => observer.observe(section));
});
