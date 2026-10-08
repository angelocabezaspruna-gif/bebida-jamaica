function enviarWhatsApp() {
  const numeroTelefono = "593978874366";
  const consumidor = document.getElementById("userType").value;
  const sabor = document.getElementById("flavorType").value;
  const dulce = document.getElementById("sweetType").value;

  const mensaje = `¡Hola! 👋 Vengo de la página web de *Agua Hibis*.%0A%0A` +
                  `*Deseo realizar un pedido:*%0A` +
                  `👤 *Perfil:* ${consumidor}%0A` +
                  `🍍 *Sabor:* ${sabor}%0A` +
                  `🍯 *Dulce:* ${dulce}%0A%0A` +
                  `¿Me ayudan con la confirmación y precio por favor?`;

  window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
}

/* Lógica del Asistente Virtual para Agua Hibis */
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
    return "Para personas con diabetes recomendamos **Agua Hibis Zero (Sin Panela)**. La hoja de guanábana ayuda a reducir la glucosa en sangre y mejorar la sensibilidad a la insulina.";
  } else if (input.includes("piña") || input.includes("digest")) {
    return "Nuestra versión **Agua Hibis con Piña** contiene bromelina natural, excelente para desinflamar el estómago y mejorar la digestión.";
  } else if (input.includes("niño") || input.includes("niños") || input.includes("pediatric")) {
    return "Los niños mayores a 6 años pueden tomar **Agua Hibis** en dosis ligeras (3-4g de jamaica por litro) preferiblemente endulzado con panela orgánica.";
  } else if (input.includes("dosis") || input.includes("gramos") || input.includes("preparar")) {
    return "La preparación recomendada para Agua Hibis es **8 a 10g de jamaica** y **2 a 3 hojas de guanábana** hervidas por cada litro de agua.";
  } else if (input.includes("panela") || input.includes("dulce")) {
    return "La versión con panela orgánica aporta minerales esenciales como hierro y calcio sin usar azúcares procesados. Es ideal para dar energía saludable.";
  } else if (input.includes("hola") || input.includes("buenas")) {
    return "¡Hola! ¿En qué te puedo ayudar hoy sobre nuestra bebida **Agua Hibis**?";
  } else {
    return "Agua Hibis es una bebida medicinal que combina la acción antiinflamatoria de la Guanábana con el poder antioxidante y diurético de la Jamaica. ¡Puedes hacer tu pedido personalizado directamente en el formulario de la página!";
  }
}
