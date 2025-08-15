// Load config
fetch('https://github.com/VoThanh11198/TranVanHaWedding/tree/922589e95b0ff38b9a704a05097f546a37ad7e76/wedding-card-html%20(1)/assets/config.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('names').textContent = data.names;
    document.getElementById('dateLocation').textContent = data.date + ' • ' + data.location;
    document.getElementById('message').textContent = data.message;
    document.getElementById('bgMusic').src = 'https://github.com/VoThanh11198/TranVanHaWedding/tree/922589e95b0ff38b9a704a05097f546a37ad7e76/wedding-card-html%20(1)/assets/music.mp3';
  });

// Hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.animation = 'floatUp 5s linear forwards';
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 1000);

function confettiEffect() {
  import('https://cdn.skypack.dev/canvas-confetti').then(({ default: confetti }) => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  });
}

// Play music
document.getElementById('playMusic').addEventListener('click', () => {
  const audio = document.getElementById('bgMusic');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// CSS animation
const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-200px); opacity: 0; }
}`;
document.head.appendChild(style);
