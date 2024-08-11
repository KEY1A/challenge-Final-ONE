function toggleTheme() {
  const body = document.body;
  const themeButton = document.getElementById('theme-button');
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeButton.textContent = '☀️';
    themeButton.title = 'Claro';
  } else {
    themeButton.textContent = '🌙';
    themeButton.title = 'Oscuro';
  }
}

// Agregar evento mouseover para mostrar el título adecuado
document.getElementById('theme-button').addEventListener('mouseover', () => {
  const body = document.body;
  const themeButton = document.getElementById('theme-button');
  if (body.classList.contains('dark-theme')) {
    themeButton.title = 'Claro';
  } else {
    themeButton.title = 'Oscuro';
  }
});