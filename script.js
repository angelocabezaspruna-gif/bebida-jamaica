function enviarWhatsApp() {
  const numeroTelefono = "593978874366";
  const consumidor = document.getElementById("userType").value;
  const sabor = document.getElementById("flavorType").value;
  const dulce = document.getElementById("sweetType").value;

  const mensaje = `¡Hola! 👋 Vengo de la página web de su emprendimiento.%0A%0A` +
                  `*Deseo realizar un pedido:*%0A` +
                  `👤 *Perfil:* ${consumidor}%0A` +
                  `🍍 *Sabor:* ${sabor}%0A` +
                  `🍯 *Dulce:* ${dulce}%0A%0A` +
                  `¿Me ayudan con la confirmación y precio por favor?`;

  window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
}

/* Lógica de Chatbot con IA Real (OpenAI API) */
function toggleChat() {
  const chatWin = document.getElementById("aiChatWindow");
  chatWin.classList.toggle("hidden");
}

function handleKeyPress(e) {
  if (e.key === "Enter") sendMessage();
}

// Reemplaza 'TU_API_KEY_AQUI' con tu clave de API de OpenAI (https://platform.openai.com)
const OPENAI_API_KEY = "TU_API_KEY_AQUI"; 

async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, "user-msg");
  input.value = "";

  // Mensaje temporal de "pensando..."
  appendMessage("<i>Procesando respuesta...</i>", "bot-msg-temp");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Eres un experto asistente virtual medicinal para un emprendimiento que vende infusiones naturales de Flor de Jamaica y Hoja de Guanábana (con opciones de Piña y Panela). Responde amablemente y de forma resumida cualquier duda sobre salud, beneficios, preparación, o temas generales."
          },
          { role: "user", content: text }
        ],
        max_tokens: 150
      })
    });

    const data = await response.json();
    
    // Eliminar mensaje temporal
    const tempMsg = document.querySelector(".bot-msg-temp");
    if (tempMsg) tempMsg.remove();

    if (data.choices && data.choices.length > 0) {
      appendMessage(data.choices[0].message.content, "bot-msg");
    } else {
      appendMessage("Lo siento, no pude obtener una respuesta en este momento.", "bot-msg");
    }
  } catch (error) {
    const tempMsg = document.querySelector(".bot-msg-temp");
    if (tempMsg) tempMsg.remove();
    appendMessage("Hubo un problema al conectar con la IA. Asegúrate de configurar una API Key válida.", "bot-msg");
  }
}

function appendMessage(msg, type) {
  const body = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = `chat-msg ${type}`;
  div.innerHTML = msg;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}
