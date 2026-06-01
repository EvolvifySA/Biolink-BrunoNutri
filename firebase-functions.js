/**
 * Firebase Cloud Function para notificar Bruno via WhatsApp
 * quando uma pessoa interage com o assistente de IA
 * 
 * INSTRUÇÕES DE CONFIGURAÇÃO:
 * 1. Install Firebase CLI: npm install -g firebase-tools
 * 2. init Firebase: firebase init functions
 * 3. Copie este código para functions/index.js
 * 4. Instale Twilio: npm install twilio
 * 5. Configure as variáveis de ambiente no Firebase Console
 * 6. Deploy: firebase deploy --only functions
 */

const functions = require('firebase-functions');
const twilio = require('twilio');

// Configurações (adicione no Firebase Console > Project Settings > Environment)
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM; // whatsapp:+14155238886 (sandbox) ou seu número
const BRUNO_WHATSAPP = process.env.BRUNO_WHATSAPP; // +55 83 99999-9999 (com país e DDD)

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Cloud Function HTTP que recebe notificações da IA
 */
exports.notifyBruno = functions.https.onRequest(async (req, res) => {
  // Segurança: apenas POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const { type, timestamp, question, source } = req.body;

    let message = '';
    const time = new Date(timestamp).toLocaleTimeString('pt-BR');

    if (type === 'ai_opened') {
      message = `🤖 **Nova entrada na IA** (${time})\nAlguém clicou no assistente de IA.\nFonte: ${source === 'home_card' ? 'Card inicial' : 'Botão FAB'}`;
    } else if (type === 'question_asked') {
      message = `❓ **Pergunta recebida** (${time})\n\n"${question}"\n\nFonte: ${source === 'preset_button' ? 'Botão pré-definido' : 'Digitação livre'}`;
    }

    if (!message) {
      return res.status(400).send('Invalid notification type');
    }

    // Enviar via Twilio WhatsApp
    await client.messages.create({
      from: TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${BRUNO_WHATSAPP}`,
      body: message,
    });

    console.log(`[${time}] Notificação enviada: ${type}`);
    res.status(200).send({ success: true, message: 'Notified' });
  } catch (error) {
    console.error('Erro ao enviar notificação:', error);
    res.status(500).send({ error: error.message });
  }
});

/**
 * Cloud Function alternativa com suporte a CORS (se usar PUT/GET)
 * (função abaixo é opcional, use se precisar de mais flexibilidade)
 */
exports.notifyBrunoCors = functions.https.onRequest(async (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const { type, timestamp, question, source, userAgent } = req.body;

    let message = '';
    const time = new Date(timestamp).toLocaleTimeString('pt-BR', { 
      timeZone: 'America/Fortaleza' 
    });

    if (type === 'ai_opened') {
      message = `🤖 Nova entrada na IA (${time})\nAlguém clicou no assistente de IA.\nFonte: ${source === 'home_card' ? 'Card inicial' : 'Botão FAB'}\n\nDevice: ${userAgent?.substring(0, 50) || 'N/A'}`;
    } else if (type === 'question_asked') {
      message = `❓ Pergunta recebida (${time})\n\n"${question}"\n\nFonte: ${source === 'preset_button' ? 'Botão pré-definido' : 'Digitação livre'}`;
    }

    if (!message) {
      return res.status(400).send('Invalid notification type');
    }

    // Enviar via Twilio WhatsApp
    const result = await client.messages.create({
      from: TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${BRUNO_WHATSAPP}`,
      body: message,
    });

    console.log(`[${time}] Notificação enviada: ${type} (SID: ${result.sid})`);
    res.status(200).json({ success: true, messageSid: result.sid });
  } catch (error) {
    console.error('Erro ao enviar notificação:', error);
    res.status(500).json({ error: error.message });
  }
});
