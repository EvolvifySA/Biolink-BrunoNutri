/* ═══════════════════════════════════
   DATA — Seletor de Objetivos (Home)
   Para adicionar: nova entrada no
   objeto smap + botão no HTML.
═══════════════════════════════════ */
const smap = {
  emagrecer: {
    r: '🔥 Emagrecimento',
    d: 'Emagrecer com saúde exige <strong>estratégia personalizada</strong>, não dietas da moda. O Bruno monta um plano baseado na sua rotina, preferências e metabolismo para que você perca gordura de forma duradoura — sem passar fome.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Emagrecimento." target="_blank">→ Quero começar</a>'
  },
  ganharmusculo: {
    r: '💪 Hipertrofia e Massa Muscular',
    d: 'Ganhar músculo de verdade precisa de <strong>periodização alimentar</strong> alinhada ao treino. O Bruno elabora um plano com superávit calórico controlado, timing de nutrientes e suplementação estratégica para maximizar seus ganhos.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Hipertrofia%20e%20Ganho%20de%20M%C3%BAsculo." target="_blank">→ Montar meu plano</a>'
  },
  performance: {
    r: '🏃 Performance Esportiva',
    d: 'Seja corrida, crossfit ou natação, a <strong>nutrição esportiva</strong> é o diferencial dos campeões. O Bruno cria estratégias pré-treino, intra e pós-treino para que você renda mais e recupere mais rápido.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Nutri%C3%A7%C3%A3o%20para%20Performance." target="_blank">→ Elevar minha performance</a>'
  },
  saude: {
    r: '❤️ Saúde Geral',
    d: 'Melhorar os <strong>exames de sangue, energia, imunidade e bem-estar</strong> começa pela alimentação. O Bruno faz uma avaliação completa e cria um plano que encaixa na sua rotina e melhora sua qualidade de vida.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Sa%C3%BAde%20Geral." target="_blank">→ Cuidar da saúde</a>'
  },
  reeducacao: {
    r: '🥗 Reeducação Alimentar',
    d: 'Chega de dietas que você não consegue manter! A <strong>reeducação alimentar</strong> do Bruno é flexível, prazerosa e criada para durar. Você aprende a comer melhor sem neura e sem abrir mão do que gosta.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Reeduca%C3%A7%C3%A3o%20Alimentar." target="_blank">→ Mudar minha relação com comida</a>'
  },
  crianca: {
    r: '👶 Nutrição Infantil',
    d: 'A alimentação na infância define a saúde do adulto. O Bruno atende crianças e adolescentes com <strong>planos divertidos e nutritivos</strong>, ajudando pais a criar filhos mais saudáveis sem brigas na hora das refeições.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Nutri%C3%A7%C3%A3o%20Infantil." target="_blank">→ Agendar para meu filho(a)</a>'
  },
  vegetariano: {
    r: '🌱 Nutrição Plant-Based',
    d: 'Ser vegetariano ou vegano e ter todos os nutrientes é totalmente possível. O Bruno elabora planos <strong>plant-based completos</strong>, garantindo proteína, ferro, B12 e tudo que seu corpo precisa.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Nutri%C3%A7%C3%A3o%20Vegetariana%20e%20Vegana." target="_blank">→ Plano vegetariano/vegano</a>'
  },
  exames: {
    r: '🔬 Nutrição Clínica',
    d: 'Colesterol alto, diabetes, triglicérides ou hormônios desregulados? A <strong>nutrição clínica</strong> é poderosa para normalizar exames sem depender só de remédios. O Bruno analisa seus exames e cria um plano terapêutico.<br><br><a href="https://wa.me/5583999999999?text=Vim%20pelo%20biolink%20e%20quero%20saber%20mais%20sobre%20Nutri%C3%A7%C3%A3o%20Cl%C3%ADnica%20e%20Ajuste%20de%20Exames." target="_blank">→ Enviar meus exames</a>'
  },
};

function sym(btn, k) {
  document.querySelectorAll('.sc').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const el = document.getElementById('sr');
  const d = smap[k];
  el.innerHTML = `<strong>${d.r}</strong><br><br>${d.d}`;
  el.classList.add('show');
}
