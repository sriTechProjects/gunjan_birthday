// transition helper: fade out via overlay then navigate, and fade in on load
(function(){
  function navigateWithTransition(url){
    const overlay = document.getElementById('transition-overlay');
    if(!overlay){
      window.location.href = url;
      return;
    }
    overlay.classList.add('active');
    // wait for the overlay to finish its fade-in (match CSS 600ms)
    setTimeout(() => { window.location.href = url; }, 600);
  }

  // expose globally
  window.navigateWithTransition = navigateWithTransition;

  // fade page in when loaded
  window.addEventListener('load', () => {
    // slight delay to allow browser paint
    requestAnimationFrame(() => { document.body.style.opacity = '1'; });
  });
})();
