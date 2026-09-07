function calcularDosis() {
  const type = document.getElementById("userType").value;
  const resultBox = document.getElementById("result");
  const resultTitle = document.getElementById("resultTitle");
  const resultDetails = document.getElementById("resultDetails");

  resultBox.classList.remove("hidden");

  if (type === "normal") {
    resultTitle.textContent = "Receta Estándar (1 Litro)";
    resultDetails.innerHTML = "Añade <strong>9 gramos de Flor de Jamaica</strong> y <strong>2 hojas secas de Guanábana</strong>. Hervir las hojas durante 5 min, apagar el fuego, agregar la jamaica e infusionar tapado por 8 minutos.";
  } else if (type === "diabetes") {
    resultTitle.textContent = "Receta Control Diabetes (1 Litro)";
    resultDetails.innerHTML = "Añade <strong>7 gramos de Flor de Jamaica</strong> y <strong>4 hojas de Guanábana</strong>. Tomar preferiblemente sin endulzar o con estevia natural. Consumir dividido en 2 tomas al día.";
  } else if (type === "kids") {
    resultTitle.textContent = "Receta Pediátrica Suave (1 Litro)";
    resultDetails.innerHTML = "Añade solo <strong>3 gramos de Flor de Jamaica</strong> y <strong>1 hoja pequeña de Guanábana</strong>. Preparar muy diluido y servir fresco. Máximo 1 vaso al día.";
  }
}