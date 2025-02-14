// Logo movement on scroll
const logo = document.getElementById('logo');
const journeyText = document.querySelector('.journey-text');
const hopeVideo = document.getElementById('hope-video');
const videoContainer = document.querySelector('.video-container');

// Scroll effects
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Logo animation (moving it up into position)
  const logoScale = 1 - (scrollPosition / 1000);
  logo.style.transform = `scale(${logoScale})`;

  // Text sliding in
  if (scrollPosition > 100) {
    journeyText.style.opacity = 1;
    journeyText.style.transform = 'translateY(0)';
  }
});

// Secret code trigger (typing "H-O-P-E")
let typedCode = '';
const secretCode = 'HOPE';

document.addEventListener('keydown', (e) => {
  typedCode += e.key.toUpperCase();
  
  if (typedCode.includes(secretCode)) {
    videoContainer.style.display = 'flex';
    hopeVideo.play();
  }
  
  // Limit the code length to avoid an endless string
  if (typedCode.length > secretCode.length) {
    typedCode = typedCode.slice(typedCode.length - secretCode.length);
  }
});
