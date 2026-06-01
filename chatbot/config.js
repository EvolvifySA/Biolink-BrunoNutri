/* ═══════════════════════════════════
   CHATBOT CONFIG
   Altere aqui para mudar número WA,
   delays e configurações globais.
═══════════════════════════════════ */
const CONFIG = {
  WA: '5583999999999',
  typingDelayMin: 2800,
  typingDelayRandom: 400,
  mascotThinking: 'assets/mascotes/mascotepensando.svg',
  mascotPointing: 'assets/mascotes/mascoteapontando.svg',
};

function waLink(msg) {
  return `https://wa.me/${CONFIG.WA}?text=${encodeURIComponent(msg)}`;
}
