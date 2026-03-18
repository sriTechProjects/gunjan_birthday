// Simple script for the Opening page: redirect to memory.html when button clicked
const openBtn = document.getElementById('openBtn');
const card = document.getElementById('card');

openBtn.addEventListener('click', () => {
  // Button press feedback
  openBtn.disabled = true;
  openBtn.style.transform = 'scale(0.98)';
  openBtn.style.transition = 'transform 120ms ease';

  // small delay so the user sees the click, then redirect
  setTimeout(() => {
    if (window.navigateWithTransition) navigateWithTransition('memory.html');
    else window.location.href = 'memory.html';
  }, 180);
});

// Allow Enter key to activate the button for accessibility
openBtn.addEventListener('keyup', (e) => { if (e.key === 'Enter') openBtn.click(); });
