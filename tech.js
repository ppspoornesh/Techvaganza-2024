// Get canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define particle properties
const particleCount = 200;
const particleSize = 3;
const particleColor = '#fff';

// Create particle array
const particles = [];
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  });
}

// Function to draw particles
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    // Update particle position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Check for collisions with canvas edges
    if (particle.x < 0 || particle.x > canvas.width) {
      particle.vx *= -1;
    }
    if (particle.y < 0 || particle.y > canvas.height) {
      particle.vy *= -1;
    }

    // Draw particle
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
    ctx.fillStyle = particleColor;
    ctx.fill();
  }
}

// Animate particles
function animate() {
  drawParticles();
  requestAnimationFrame(animate);
}

// Start animation
animate();

// Add event listener for window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Countdown timer
const daysSpan = document.querySelector('.days .value');
const hoursSpan = document.querySelector('.hours .value');
const minutesSpan = document.querySelector('.minutes .value');
const secondsSpan = document.querySelector('.seconds .value');

// Set target date
const targetDate = new Date('2024-03-15T00:00:00'); // Example date

// Update countdown every second
setInterval(() => {
  const now = new Date();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (100