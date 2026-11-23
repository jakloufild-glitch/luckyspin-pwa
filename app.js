function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const screen = document.getElementById('screen-' + name);
  if (screen) screen.classList.add('active');

  const btn = document.querySelector(`.nav-btn[data-screen="${name}"]`);
  if (btn) btn.classList.add('active');

  window.scrollTo(0, 0);
}

// Simple install prompt handling
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// Prevent double-tap zoom on iOS
let lastTouch = 0;
document.addEventListener('touchend', (e) => {
  const now = Date.now();
  if (now - lastTouch <= 300) e.preventDefault();
  lastTouch = now;
}, { passive: false });
