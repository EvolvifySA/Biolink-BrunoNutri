/* ═══════════════════════════════════
   DATA — Depoimentos
   Para adicionar: inclua um novo
   objeto no array tdata.
═══════════════════════════════════ */
const tdata = [
  { s: '★★★★★', t: '"Perdi <strong>12kg em 3 meses</strong> sem passar fome. Aprendi a comer de verdade!"', a: 'Camila S., 28 anos' },
  { s: '★★★★★', t: '"Minha performance no crossfit mudou completamente. <strong>+4kg de massa muscular</strong>."', a: 'Rafael M., 32 anos' },
  { s: '★★★★★', t: '"Completei minha <strong>primeira meia maratona</strong> com a nutrição do Bruno. Incrível!"', a: 'Larissa T., 25 anos' },
  { s: '★★★★★', t: '"Meus exames normalizaram em 4 meses. <strong>Sem remédio!</strong> Recomendo demais."', a: 'Fernanda L., 41 anos' },
  { s: '★★★★★', t: '"Perdi <strong>18kg e não voltei nenhum</strong>. Reeducação alimentar que funciona de verdade."', a: 'Paulo R., 38 anos' },
  { s: '★★★★★', t: '"Atendimento online <strong>super prático</strong> e suporte no WhatsApp faz toda diferença."', a: 'Juliana K., 22 anos' },
];

function renderTestimonials() {
  const tt = document.getElementById('tt');
  if (!tt) return;
  [...tdata, ...tdata].forEach(t => {
    tt.innerHTML += `<div class="tc"><div class="tc-stars">${t.s}</div><div class="tc-txt">${t.t}</div><div class="tc-author">${t.a}</div></div>`;
  });
}

renderTestimonials();
