# 🤖 Setup: Notificações WhatsApp para IA do Bruno

## 📋 Resumo

Quando alguém clica no assistente de IA ou faz uma pergunta, uma mensagem é enviada automaticamente para o WhatsApp do Bruno informando:
- Quem clicou no AI
- Qual pergunta foi feita
- Horário
- Tipo de ação (botão FAB, card inicial, digitação, etc)

---

## 🚀 Passo a Passo de Setup

### PASSO 1️⃣: Criar conta Twilio

1. Acesse: https://www.twilio.com/
2. Clique em "Sign Up" e crie uma conta
3. Confirme seu email
4. Na dashboard, vá em **Messaging > Try it out**
5. Ative **WhatsApp Sandbox** (vai gerar um número temporário)
6. **Salve os dados:**
   - Account SID
   - Auth Token
   - Número Twilio WhatsApp (ex: `whatsapp:+14155238886`)

---

### PASSO 2️⃣: Conectar seu WhatsApp ao Sandbox Twilio

1. Abra WhatsApp e envie a seguinte mensagem para: **+1 415 523 8886**
   ```
   join able-price
   ```
   (O código pode variar, confira na dashboard Twilio)

2. Você receberá uma confirmação de que está conectado ao sandbox

---

### PASSO 3️⃣: Criar projeto Firebase

1. Acesse: https://console.firebase.google.com/
2. Clique em "Add project"
3. Nome: `bruno-nutri-ai` (ou qualquer nome)
4. Desative Google Analytics (opcional)
5. Clique em "Create project"
6. Aguarde criação (2-3 minutos)

---

### PASSO 4️⃣: Configurar Firebase Cloud Functions

#### 4.1 - Instalar Firebase CLI

```bash
npm install -g firebase-tools
```

#### 4.2 - Fazer login no Firebase

```bash
firebase login
```

(Vai abrir navegador para autenticação)

#### 4.3 - Inicializar projeto

Na pasta do projeto, execute:

```bash
firebase init functions
```

Respostas sugeridas:
- `Use an existing project?` → Escolha o projeto criado (`bruno-nutri-ai`)
- `What language?` → `JavaScript`
- `Install dependencies now?` → `Y` (sim)

#### 4.4 - Adicionar dependência Twilio

```bash
cd functions
npm install twilio
cd ..
```

#### 4.5 - Copiar código da função

1. Abra `functions/index.js`
2. **Substitua TODO O CONTEÚDO** pelo código em [firebase-functions.js](./firebase-functions.js)
3. Salve o arquivo

---

### PASSO 5️⃣: Configurar variáveis de ambiente

1. No Firebase Console, vá em: **Project Settings > Functions > Runtime Environment**
2. Preencha as variáveis de ambiente:

```
TWILIO_ACCOUNT_SID = seu-account-sid-aqui
TWILIO_AUTH_TOKEN = seu-auth-token-aqui
TWILIO_WHATSAPP_FROM = whatsapp:+14155238886
BRUNO_WHATSAPP = +5583999999999
```

**Importante:** Substitua `+5583999999999` pelo número de Bruno (com país +55 e DDD)

---

### PASSO 6️⃣: Deploy da função

Na pasta do projeto, execute:

```bash
firebase deploy --only functions
```

Após sucesso, você verá a URL da função. Exemplo:
```
notifyBrunoCors: https://us-central1-bruno-nutri-ai.cloudfunctions.net/notifyBrunoCors
```

---

### PASSO 7️⃣: Adicionar URL no HTML

1. Abra `index.html`
2. Procure por esta linha (perto do início do `<script>`):
   ```javascript
   const WEBHOOK_URL = 'YOUR_FIREBASE_FUNCTION_URL';
   ```

3. Substitua por (use a URL com CORS):
   ```javascript
   const WEBHOOK_URL = 'https://us-central1-bruno-nutri-ai.cloudfunctions.net/notifyBrunoCors';
   ```

4. Salve o arquivo

---

## ✅ Testar a configuração

1. Abra `index.html` no navegador
2. Clique no botão **🤖** (AI) na tela inicial
3. **Espere alguns segundos**
4. Confira seu WhatsApp — uma mensagem deve chegar em poucos segundos

---

## 🛠️ Solução de Problemas

### Mensagem não chegou?

- [ ] Verificou se confirmou o sandbox do Twilio (`join able-price`)?
- [ ] O número do Bruno está correto com país e DDD? (`+55 83 99999-9999`)
- [ ] A URL do Firebase foi copiada corretamente no HTML?
- [ ] Console do navegador mostra erros? (Abra F12 > Console)

### Verificar logs da função

```bash
firebase functions:log
```

---

## 📊 Mensagens que serão enviadas

### Quando alguém abre a IA:
```
🤖 Nova entrada na IA (14:32:15)
Alguém clicou no assistente de IA.
Fonte: Card inicial
Device: Mozilla/5.0...
```

### Quando alguém faz uma pergunta:
```
❓ Pergunta recebida (14:33:22)

"Como funciona o emagrecimento?"

Fonte: Botão pré-definido
```

---

## 💡 Customizações futuras

Para adicionar mais eventos:

1. No HTML, chame: `notifyContact('seu_tipo', { dados })`
2. Na função Firebase, adicione `else if` para processar

Exemplo:
```javascript
} else if (type === 'consultorio_visitado') {
  message = `📍 Alguém visitou a página de serviços`;
}
```

---

## 🚨 Importante: Segurança

- ⚠️ **Dados sensíveis:** Nunca coloque token Twilio diretamente no HTML
- ✅ Sempre use variáveis de ambiente no Firebase
- 🔒 A função verifica apenas POST (segurança)

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs: `firebase functions:log`
2. Confira Console do navegador (F12)
3. Teste a URL da função diretamente em um terminal

---

**Pronto!** Bruno receberá notificações em tempo real! 🚀
