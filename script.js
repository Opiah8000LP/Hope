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
  const starCount = 500; // Increased number of stars for a denser effect
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random star sizes (small, medium, large)
    const starSize = Math.random();
    if (starSize < 0.3) {
      star.classList.add('small'); // 30% chance for small stars
    } else if (starSize < 0.7) {
      star.classList.add('medium'); // 40% chance for medium stars
    } else {
      star.classList.add('large'); // 30% chance for large stars
    }

    // Randomly position the stars within the screen dimensions
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Randomize the speed of each star's movement
    const animationType = Math.random() > 0.95 ? 'shooting-star' : 'twinkle'; // Randomly assign a shooting star or twinkle animation
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Speed between 2s and 5s
    star.style.animationName = animationType;

    // Randomize twinkle speed for a more varied effect (Twinkle twinkle little star I'm an ape and I am dumb!!)
    if (animationType === 'twinkle') {
      star.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`; // Twinkle between 1.5s and 3s
    }

    starContainer.appendChild(star);
  }
}

// Create constellations (simple example for a few patterns)
function createConstellations() {
  const constellations = [
    { // Example constellation 1 (a simple triangle)
      stars: [
        { top: '20%', left: '20%' },
        { top: '40%', left: '50%' },
        { top: '60%', left: '20%' }
      ],
      lines: [
        { from: { top: '20%', left: '20%' }, to: { top: '40%', left: '50%' } },
        { from: { top: '40%', left: '50%' }, to: { top: '60%', left: '20%' } },
        { from: { top: '60%', left: '20%' }, to: { top: '20%', left: '20%' } }
      ]
    }
  ];

  // Loop through the constellations and draw them
  constellations.forEach((constellation) => {
    // Draw stars
    constellation.stars.forEach((star) => {
      const starElem = document.createElement('div');
      starElem.classList.add('star', 'medium');
      starElem.style.top = star.top;
      starElem.style.left = star.left;
      starContainer.appendChild(starElem);
    });

    // Draw lines connecting the stars
    constellation.lines.forEach((line) => {
      const lineElem = document.createElement('div');
      lineElem.classList.add('constellation-line');
      const fromStar = line.from;
      const toStar = line.to;

      const fromTop = parseFloat(fromStar.top);
      const fromLeft = parseFloat(fromStar.left);
      const toTop = parseFloat(toStar.top);
      const toLeft = parseFloat(toStar.left);

      lineElem.style.top = `${fromTop}%`;
      lineElem.style.left = `${fromLeft}%`;
      lineElem.style.width = `${Math.abs(toLeft - fromLeft)}vw`;
      lineElem.style.height = `${Math.abs(toTop - fromTop)}vh`;
      lineElem.style.transformOrigin = 'top left';
      lineElem.style.transform = `rotate(${Math.atan2(toTop - fromTop, toLeft - fromLeft)}rad)`;

      starContainer.appendChild(lineElem);
    });
  });
}

createStars(); // Initialize stars on page load
createConstellations(); // Initialize constellations
