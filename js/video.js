/* ═══════════════════════════════════
   VIDEO PLAYER — Bruno Card (YouTube)
═══════════════════════════════════ */
const YT_VIDEO_ID = '4lzE1bmyjFU';
let ytPlayer = null;
let ytReady = false;
const soundBtn = document.getElementById('videoSoundBtn');
const playOverlay = document.getElementById('playOverlay');

/* Carrega a API de IFrame do YouTube */
(function () {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();

/* Chamado automaticamente pela API quando ela termina de carregar */
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('brunoVideo', {
    videoId: YT_VIDEO_ID,
    playerVars: {
      autoplay: 1,
      mute: 1,            // necessário para o autoplay funcionar nos navegadores
      loop: 1,
      playlist: YT_VIDEO_ID, // o loop exige a playlist com o mesmo id
      controls: 0,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
      fs: 0,
      disablekb: 1,
      iv_load_policy: 3
    },
    events: {
      onReady: function (e) {
        ytReady = true;
        e.target.mute();
        e.target.playVideo();
      }
    }
  });
}

/* Ativa o som no primeiro toque em qualquer lugar */
document.addEventListener('click', function () {
  if (ytReady && ytPlayer.isMuted()) {
    ytPlayer.unMute();
    soundBtn.innerHTML = '🔊';
  }
}, { once: true });

function toggleMute(e) {
  e.stopPropagation();
  if (!ytReady) return;
  if (ytPlayer.isMuted()) {
    ytPlayer.unMute();
    soundBtn.innerHTML = '🔊';
  } else {
    ytPlayer.mute();
    soundBtn.innerHTML = '🔇';
  }
}

function togglePlayPause() {
  if (!ytReady) return;
  if (ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
    playOverlay.style.opacity = '1';
  } else {
    ytPlayer.playVideo();
    playOverlay.style.opacity = '0';
  }
}
