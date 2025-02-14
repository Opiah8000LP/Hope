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

// Star particles generation
const starContainer = document.createElement('div');
starContainer.classList.add('stars');
document.body.appendChild(starContainer);

function createStars() {
  const starCount = 300; // Number of stars
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomly position the stars within the screen dimensions
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    
    // Randomize the speed of each star's movement
    const animationType = Math.random() > 0.95 ? 'shooting-star' : 'twinkle'; // Randomly assign a shooting star or twinkle animation
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Speed between 2s and 5s
    star.style.animationName = animationType;

    // Randomize twinkle speed for a more varied effect
    if (animationType === 'twinkle') {
      star.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`; // Twinkle between 1.5s and 3s
    }

    starContainer.appendChild(star);
  }
}

createStars(); // Initialize stars on page load
