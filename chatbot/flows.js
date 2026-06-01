/* ═══════════════════════════════════
   FLOWS — Evo Recepcionista Digital

   Estrutura de cada flow:
   {
     msg: string (HTML permitido),
     chips: [
       { l: 'Label', f: 'flow_id' }    → navega para outro flow
       { l: 'Label', wa: 'mensagem' }  → abre WhatsApp
     ]
   }

   Para adicionar novos fluxos:
   1. Crie uma nova entrada no objeto flows
   2. Referencie com { f: 'novo_flow' } em qualquer chip
═══════════════════════════════════ */

const flows = {

  /* ── MENU PRINCIPAL ── */
  inicio: {
    msg: `Pra te ajudar melhor, me conta — qual é o seu objetivo principal? 😊`,
    chips: [
      { l: '🔥 Emagrecer', f: 'emagrecer' },
      { l: '💪 Ganhar Músculo', f: 'hipertrofia' },
      { l: '🏥 Saúde & Exames', f: 'clinico' },
      { l: '🏃 Performance', f: 'performance' },
      { l: '📅 Quero Agendar', f: 'agendar' },
    ]
  },

  /* ── EMAGRECIMENTO ── */
  emagrecer: {
    msg: `Emagrecer com saúde é totalmente possível — e o Bruno tem mais de 10 anos de experiência nisso! 🔥<br><br>Me conta: como você se descreveria hoje?`,
    chips: [
      { l: '🌱 Estou começando agora', f: 'emag_inicio' },
      { l: '😤 Já tentei várias dietas', f: 'emag_tentou' },
      { l: '📉 Tava indo bem mas travei', f: 'emag_plato' },
    ]
  },
  emag_inicio: {
    msg: `Começar do jeito certo faz toda a diferença! 💡<br><br>O Bruno monta um plano do <strong>zero</strong>, no seu ritmo, sem passar fome. A maioria dos pacientes já nota resultado nos <strong>primeiros 30 dias</strong>.<br><br>Como você prefere ser atendido?`,
    chips: [
      { l: '📱 Online (qualquer cidade)', f: 'online' },
      { l: '🏙️ Presencial em João Pessoa', f: 'presencial' },
      { l: '💰 Ver planos e valores', f: 'planos' },
    ]
  },
  emag_tentou: {
    msg: `Entendo — e isso é mais comum do que parece. 😌<br><br>Quando nada funciona, o problema quase sempre é falta de <strong>individualização</strong>, não de força de vontade. O Bruno analisa seu metabolismo e histórico pra montar algo que você consiga manter de verdade.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  emag_plato: {
    msg: `Platô é frustrante, mas tem solução! 🔄<br><br>O corpo se adapta com o tempo — e o Bruno faz os ajustes certos no timing e nas calorias pra você voltar a progredir sem precisar sofrer mais.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },

  /* ── HIPERTROFIA ── */
  hipertrofia: {
    msg: `💪 Ganhar músculo de verdade exige alimentação certeira — não só treino pesado.<br><br>O Bruno especializa em nutrição esportiva e vai alinhar o plano alimentar ao seu treino: proteína no timing certo, carbo estratégico, suplementação só se necessário.<br><br>Você já treina atualmente?`,
    chips: [
      { l: '✅ Sim, já treino', f: 'hiper_treina' },
      { l: '🆕 Vou começar a treinar', f: 'hiper_vai' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  hiper_treina: {
    msg: `Ótimo! Quem já treina costuma ver resultado muito mais rápido com a nutrição ajustada. 🚀<br><br>Resultado típico dos pacientes: <strong>+3 a 5kg de massa</strong> nos primeiros 3 meses com treino consistente.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  hiper_vai: {
    msg: `Começar o treino e a nutrição juntos é o jeito mais inteligente! 🎯<br><br>Você não desperdiça nenhum treino sem o combustível certo desde o início. O Bruno monta o plano que evolui junto com você.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },

  /* ── SAÚDE CLÍNICA ── */
  clinico: {
    msg: `A nutrição clínica pode transformar sua saúde — muitos pacientes do Bruno melhoram exames sem depender só de remédios. 🏥<br><br>Qual condição você quer tratar?`,
    chips: [
      { l: '🩸 Diabetes', f: 'diabetes' },
      { l: '❤️ Hipertensão', f: 'hipertensao' },
      { l: '🫀 Colesterol', f: 'colesterol' },
      { l: '🌀 SOP / Hormônios', f: 'sop' },
      { l: '🔬 Outra condição', f: 'clinico_outro' },
    ]
  },
  diabetes: {
    msg: `O Bruno já ajudou muitos pacientes a controlar a glicemia — alguns até reduziram medicação com acompanhamento médico. 🩸<br><br>A abordagem foca em índice glicêmico, timing de refeições e distribuição de macros pro seu caso específico.<br><br>Quer conversar com ele sobre sua situação?`,
    chips: [
      { l: '💬 Sim, quero conversar', wa: 'Vim pelo biolink e quero ajuda nutricional para controle do Diabetes.' },
      { l: '📱 Como funciona online?', f: 'online' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  hipertensao: {
    msg: `A alimentação tem papel enorme no controle da pressão — redução de sódio, aumento de potássio, alimentos anti-inflamatórios. ❤️<br><br>O Bruno monta um plano compatível com sua medicação atual. Vários pacientes estabilizam a pressão em 2 a 3 meses.<br><br>Quer falar com ele?`,
    chips: [
      { l: '💬 Quero conversar', wa: 'Vim pelo biolink e quero ajuda nutricional para controle da Hipertensão.' },
      { l: '📱 Como funciona online?', f: 'online' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  colesterol: {
    msg: `Colesterol e triglicérides respondem muito bem à alimentação certa. 🫀<br><br>O Bruno analisa seus exames e monta um plano que ajuda a reduzir LDL, aumentar HDL e controlar os triglicérides — sem dieta radical.<br><br>Você já tem exames recentes?`,
    chips: [
      { l: '✅ Tenho exames', wa: 'Vim pelo biolink e quero ajuda nutricional para Colesterol alto. Tenho exames recentes.' },
      { l: '❌ Ainda não tenho', wa: 'Vim pelo biolink e quero ajuda nutricional para Colesterol alto. Ainda não tenho exames.' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  sop: {
    msg: `SOP é complexa, mas a alimentação é uma das ferramentas mais poderosas no controle dos sintomas — ciclo, peso, hormônios e energia. 🌀<br><br>O Bruno tem experiência com pacientes com SOP e ajusta a nutrição pra ajudar no equilíbrio hormonal.<br><br>Quer dar o próximo passo?`,
    chips: [
      { l: '💬 Quero conversar', wa: 'Vim pelo biolink e quero ajuda nutricional para SOP e Desequilíbrio Hormonal.' },
      { l: '📱 Atende online?', f: 'online' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  clinico_outro: {
    msg: `O Bruno também atende outras condições — intestino irritável, gastrite, tireoide e mais. 🔬<br><br>O melhor é descrever sua situação pra ele diretamente. Ele avalia e te diz se consegue ajudar!`,
    chips: [
      { l: '💬 Descrever minha situação', wa: 'Vim pelo biolink e quero ajuda nutricional para uma condição de saúde específica.' },
      { l: '📱 Atende online?', f: 'online' },
      { l: '↩ Outros objetivos', f: 'inicio' },
    ]
  },

  /* ── PERFORMANCE ESPORTIVA ── */
  performance: {
    msg: `🏃 Nutrição esportiva é a especialidade principal do Bruno — mais de 10 anos trabalhando com atletas amadores e profissionais dentro de academias.<br><br>Qual é o seu esporte?`,
    chips: [
      { l: '🏋️ Musculação', f: 'hiper_treina' },
      { l: '🏃 Corrida / Endurance', f: 'perf_corrida' },
      { l: '⚡ Crossfit / Funcional', f: 'perf_crossfit' },
      { l: '🤸 Outro esporte', f: 'perf_geral' },
    ]
  },
  perf_corrida: {
    msg: `Pra corrida, a nutrição certa melhora o pace, a recuperação e previne lesões. 🏃<br><br>O Bruno monta estratégias de carbo-loading, nutrição pré/pós-treino e hidratação específica pro seu volume de corrida. Muitos pacientes melhoram o tempo de prova em 8 semanas.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  perf_crossfit: {
    msg: `Crossfit é exigente — WODs intensos precisam de combustível certo antes e recuperação rápida depois. ⚡<br><br>O Bruno monta planos que aumentam energia nos treinos, reduzem DOMS e melhoram composição corporal pra você performar melhor.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },
  perf_geral: {
    msg: `Seja qual for o esporte, a nutrição bem feita é o que separa quem evolui de quem fica estagnado. 🎯<br><br>O Bruno analisa sua rotina de treinos e monta estratégias pra você render mais e recuperar mais rápido.<br><br>Como prefere ser atendido?`,
    chips: [
      { l: '📱 Online', f: 'online' },
      { l: '🏙️ Presencial em JP', f: 'presencial' },
      { l: '💰 Ver planos', f: 'planos' },
    ]
  },

  /* ── MODALIDADE ── */
  online: {
    msg: `📱 O atendimento online é completo — tem pacientes do Brasil todo!<br><br>✅ Anamnese + avaliação por formulário<br>✅ Consulta via WhatsApp ou videochamada<br>✅ Plano alimentar em PDF<br>✅ Suporte direto com o Bruno<br>✅ Revisão mensal do plano<br><br>Quer agendar sua consulta online?`,
    chips: [
      { l: '✅ Sim, quero agendar!', wa: 'Vim pelo biolink e quero agendar uma consulta ONLINE com o Bruno.' },
      { l: '💰 Ver valores antes', f: 'planos' },
      { l: '↩ Outros objetivos', f: 'inicio' },
    ]
  },
  presencial: {
    msg: `🏙️ O Bruno atende presencialmente em <strong>João Pessoa – PB</strong>.<br><br>A consulta presencial inclui avaliação física completa e plano alimentar na hora.<br><br>Quer verificar a disponibilidade?`,
    chips: [
      { l: '✅ Sim, quero agendar!', wa: 'Vim pelo biolink e quero agendar uma consulta PRESENCIAL com o Bruno em João Pessoa.' },
      { l: '💰 Ver valores antes', f: 'planos' },
      { l: '↩ Outros objetivos', f: 'inicio' },
    ]
  },

  /* ── PLANOS & PREÇOS ── */
  planos: {
    msg: `💰 O Bruno tem planos mensais, trimestrais e semestrais — os valores variam conforme o pacote e o objetivo.<br><br>Pra indicar o plano certo pro seu caso, ele prefere entender um pouco mais sobre você antes. É bem rápido!<br><br>Quer que ele te mande as opções no WhatsApp?`,
    chips: [
      { l: '✅ Sim, manda os planos!', wa: 'Vim pelo biolink e gostaria de conhecer os planos e valores da consultoria nutricional.' },
      { l: '📱 Saber sobre online', f: 'online' },
      { l: '🏙️ Saber sobre presencial', f: 'presencial' },
    ]
  },

  /* ── AGENDAMENTO ── */
  agendar: {
    msg: `Ótimo! 😊 O Bruno atende <strong>online</strong> (Brasil todo) e <strong>presencial</strong> em João Pessoa. Como você prefere?`,
    chips: [
      { l: '📱 Online', wa: 'Vim pelo biolink e quero agendar uma consulta ONLINE com o Bruno.' },
      { l: '🏙️ Presencial em João Pessoa', wa: 'Vim pelo biolink e quero agendar uma consulta PRESENCIAL com o Bruno em João Pessoa.' },
      { l: '💰 Ver valores primeiro', f: 'planos' },
    ]
  },

};
