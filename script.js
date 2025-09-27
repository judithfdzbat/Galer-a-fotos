const themeBtn = document.getElementById('toggle-theme');
const motionBtn = document.getElementById('toggle-motion');


themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  const pressed = themeBtn.getAttribute('aria-pressed') === 'true';
  themeBtn.setAttribute('aria-pressed', !pressed);
});


motionBtn.addEventListener('click', () => {
  document.body.classList.toggle('reduced-motion');
  const pressed = motionBtn.getAttribute('aria-pressed') === 'true';
  motionBtn.setAttribute('aria-pressed', !pressed);
});


