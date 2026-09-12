function enviarWhatsApp() {
  const numeroTelefono = "593978874366"; // Número configurado para Ecuador (+593)
  
  const consumidor = document.getElementById("userType").value;
  const sabor = document.getElementById("flavorType").value;
  const dulce = document.getElementById("sweetType").value;

  // Mensaje de bienvenida preformateado que enviará el cliente
  const mensaje = `¡Hola! 👋 Vengo de la página web de su emprendimiento.%0A%0A` +
                  `*Deseo realizar un pedido con las siguientes especificaciones:*%0A` +
                  `👤 *Perfil:* ${consumidor}%0A` +
                  `🍍 *Sabor:* ${sabor}%0A` +
                  `🍯 *Dulce:* ${dulce}%0A%0A` +
                  `Quedo a la espera de su respuesta para confirmar el precio y la entrega. ¡Gracias!`;

  const url = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  
  window.open(url, '_blank');
}
