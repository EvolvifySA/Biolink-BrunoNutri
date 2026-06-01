/* ═══════════════════════════════════
   VIDEO PLAYER — Bruno Card
═══════════════════════════════════ */
const video = document.getElementById('brunoVideo');
const soundBtn = document.getElementById('videoSoundBtn');
const playOverlay = document.getElementById('playOverlay');

/* Ativa o som no primeiro toque em qualquer lugar */
document.addEventListener('click', function () {
  if (video && video.muted) {
    video.muted = false;
    soundBtn.innerHTML = '🔊';
  }
}, { once: true });

function toggleMute(e) {
  e.stopPropagation();
  if (video.muted) {
    video.muted = false;
    soundBtn.innerHTML = '🔊';
  } else {
    video.muted = true;
    soundBtn.innerHTML = '🔇';
  }
}

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playOverlay.style.opacity = '0';
  } else {
    video.pause();
    playOverlay.style.opacity = '1';
  }
}
