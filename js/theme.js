// js/theme.js
function toggleTheme() {
  const body = document.body;
  const themeButton = document.getElementById('theme-button');
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeButton.textContent = '☀️';
  } else {
    themeButton.textContent = '🌙';
  }
}