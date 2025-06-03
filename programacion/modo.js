/*document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'auto';
  document.documentElement.setAttribute('data-bs-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });*/

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const currentTheme = localStorage.getItem('theme') || 'auto';
  document.documentElement.setAttribute('data-bs-theme', currentTheme);

  const updateIcon = (theme) => {
    if (theme === 'dark') {
      themeIcon.classList.replace('bi-moon', 'bi-sun');
      themeToggle.textContent = 'Modo Claro';
    } else {
      themeIcon.classList.replace('bi-sun', 'bi-moon');
      themeToggle.textContent = 'Modo Oscuro';
    }
  };

  updateIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });
});
