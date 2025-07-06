function updateSpinnerSize() {
  const img = document.getElementById('spinner-img');
  const root = document.documentElement;
  
  // Set spinner size based on image width and height
  root.style.setProperty('--spinner-size', `${img.clientWidth}px`);
  root.style.setProperty('--spinner-height', `${img.clientHeight}px`);
}

// Update on load and window resize
window.addEventListener('load', updateSpinnerSize);
window.addEventListener('resize', updateSpinnerSize);