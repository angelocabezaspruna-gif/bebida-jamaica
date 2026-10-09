// Cálculo dinámico del precio
function calcularTotal() {
  const selectPack = document.getElementById('packType');
  const price = parseFloat(selectPack.options[selectPack.selectedIndex].getAttribute('data-price')) || 1.50;
  const units = parseInt(document.getElementById('unitsCount').value) || 1;
  
  const total = (price * units).toFixed(2);
  document.getElementById('totalPrice').innerText = `$${total}`;
}

// Envío de pedido por WhatsApp
function enviarWhatsApp() {
  const pack = document.getElementById('packType').value;
  const units = document.getElementById('unitsCount').value;
  const flavor = document.getElementById('flavorType').value;
  const sweet = document.getElementById('sweetType').value;
  const total = document.getElementById('totalPrice').innerText;

  const phone = "593978874366";
  const message = `¡Hola Agua Hibis! 🌺 Deseo realizar un pedido:\n\n` +
                  `• Presentación: ${pack}\n` +
                  `• Cantidad: ${units}\n` +
                  `• Sabor: ${flavor}\n` +
                  `• Endulzante: ${sweet}\n` +
                  `• Total estimado: ${total}\n\n` +
                  `¿Me ayudan con la confirmación para la entrega?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Preguntas Frecuentes
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const isVisible = answer.style.display === 'block';
  
  document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.faq-question span').forEach(el => el.innerText = '+');

  if (!isVisible) {
    answer.style.display = 'block';
    button.querySelector('span').innerText = '-';
  }
}

// Control de Ventana del Chatbot
function toggleChat() {
  const chatWindow = document.getElementById('aiChatWindow');
  chatWindow.classList.toggle('hidden');
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Chatbot Inteligente local para la marca Agua Hibis
function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (text === '') return;

  const chatBody = document.getElementById('chatBody');

  // Agregar mensaje del usuario
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user-msg';
  userDiv.innerText = text;
  chatBody.appendChild(userDiv);

  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Lógica de respuesta automatizada inteligente
  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.className = 'chat-msg bot-msg';
    
    const lower = text.toLowerCase();
    let reply = "Agua Hibis es una infusión medicinal 100% natural de Flor de Jamaica y Hoja de Guanábana. Si deseas un pedido a medida, puedes usar nuestra calculadora de compras.";

    if (lower.includes('beneficio') || lower.includes('sirve') || lower.includes('salud')) {
      reply = "Agua Hibis regula la presión arterial, favorece la digestión, actúa como antiinflamatorio y ayuda a reducir los niveles de estrés y glucosa en sangre.";
    } else if (lower.includes('diabetes') || lower.includes('azucar') || lower.includes('sin panela')) {
      reply = "Para personas con diabetes o dieta Keto recomendamos nuestra variante 'Agua Hibis Zero (Sin Panela)', que conserva todas las propiedades medicinales sin aportar calorías ni azúcar.";
    } else if (lower.includes('precio') || lower.includes('cuanto cuesta') || lower.includes('valor')) {
      reply = "Nuestros precios son: Botella 500ml a $1.50, Botella 1 Litro a $2.50 y el Six-Pack de 500ml a $8.00.";
    } else if (lower.includes('pina') || lower.includes('piña')) {
      reply = "La versión con Piña incluye bromelina natural, excelente para reducir la hinchazón abdominal y mejorar la digestión después de las comidas.";
    } else if (lower.includes('hola') || lower.includes('buenas')) {
      reply = "¡Hola! Bienvenido a Agua Hibis. ¿En qué puedo ayudarte hoy sobre nuestras infusiones medicinales?";
    }

    botDiv.innerText = reply;
    chatBody.appendChild(botDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}
