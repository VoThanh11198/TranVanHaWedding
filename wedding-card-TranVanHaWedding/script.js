// Load dữ liệu từ config.json
fetch('assets/config.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('names').textContent = data.names;
    document.getElementById('dateLocation').textContent = data.date + ' • ' + data.location;
    document.getElementById('message').textContent = data.message;
    document.getElementById('qrMap').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data.mapLink)}`;
  });

// Tim bay
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

// Pháo giấy
function confettiEffect() {
  import('https://cdn.skypack.dev/canvas-confetti').then(({ default: confetti }) => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  });
}

// Nhạc nền
document.getElementById('playMusic').addEventListener('click', () => {
  const audio = document.getElementById('bgMusic');
  if (audio.paused) audio.play();
  else audio.pause();
});

// CSS animation
const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-200px); opacity: 0; }
}`;
document.head.appendChild(style);
