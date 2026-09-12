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

/* Lógica de la Inteligencia Artificial (Chatbot) */
function toggleChat() {
  const chatWin = document.getElementById("aiChatWindow");
  chatWin.classList.toggle("hidden");
}

function handleKeyPress(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, "user-msg");
  input.value = "";

  setTimeout(() => {
    const response = getAIResponse(text.toLowerCase());
    appendMessage(response, "bot-msg");
  }, 600);
}

function appendMessage(msg, type) {
  const body = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = `chat-msg ${type}`;
  div.innerHTML = msg;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function getAIResponse(input) {
  if (input.includes("diabetes") || input.includes("azúcar") || input.includes("glucosa")) {
    return "Para personas con diabetes recomendamos la opción **Sin Panela**. La hoja de guanábana ayuda a reducir la glucosa en sangre y mejorar la sensibilidad a la insulina.";
  } else if (input.includes("piña") || input.includes("digest")) {
    return "Nuestra versión con **Piña** contiene bromelina natural, excelente para desinflamar el estómago y mejorar la digestión acelerada.";
  } else if (input.includes("niño") || input.includes("niños") || input.includes("pediatric")) {
    return "Los niños mayores a 6 años pueden consumirlo en dosis bajas (3-4g de jamaica por litro) preferiblemente endulzado con panela orgánica para aportar energía.";
  } else if (input.includes("dosis") || input.includes("gramos") || input.includes("preparar")) {
    return "Para un adulto estándar la dosis óptima es **8 a 10g de jamaica** y **2 a 3 hojas de guanábana** hervidas por cada litro de agua.";
  } else if (input.includes("panela") || input.includes("dulce")) {
    return "La panela orgánica aporta minerales esenciales como hierro y calcio sin usar azúcares procesados. Es perfecta si buscas una bebida revitalizante.";
  } else if (input.includes("hola") || input.includes("buenas")) {
    return "¡Hola! ¿En qué te puedo ayudar hoy sobre nuestras bebidas medicinales?";
  } else {
    return "Es una gran pregunta. Nuestras infusión combina la acción antiinflamatoria de la Guanábana con el poder antioxidante de la Jamaica. Si deseas hacer un pedido personalizado, utiliza la sección de pedido por WhatsApp.";
  }
}
