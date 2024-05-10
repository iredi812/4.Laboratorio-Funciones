// Variables globales
let turno = 1;
const displayTurno = document.querySelector(".numero-turno");

// Función que actualiza el display del turno
function actualizarDisplay() {
  if (displayTurno) {
    displayTurno.textContent = turno.toString().padStart(2, "0");
  }
}

// Función que disminuye el turno en 1
function estadoAnterior() {
  if (turno > 1) turno--;
  actualizarDisplay();
}

// Función que aumenta el turno en 1
function estadoSiguiente() {
  turno++;
  actualizarDisplay();
}

// Función que reinicia el turno a 1 y limpia el input
function reset() {
  turno = 1;
  actualizarDisplay();
  const inputTurno = document.getElementById("turnoInput");
  if (inputTurno && inputTurno instanceof HTMLInputElement) {
    inputTurno.value = "";
  }
}

// Función que cambia el turno a un valor específico que pasamos al input
function cambiarTurno() {
  const inputTurno = document.getElementById("turnoInput");
  if (inputTurno && inputTurno instanceof HTMLInputElement) {
    const nuevoTurno = parseInt(inputTurno.value, 10);
    if (!isNaN(nuevoTurno)) {
      turno = nuevoTurno;
      actualizarDisplay();
    }
  }
}

// Función para inicializar los listeners de los botones
function initEventListeners() {
  const btnAnterior = document.getElementById("anteriorBtn");
  const btnSiguiente = document.getElementById("siguienteBtn");
  const resetBtn = document.getElementById("resetBtn");
  const cambiarTurnoBtn = document.getElementById("cambiarTurnoBtn");

  if (btnAnterior) {
    btnAnterior.addEventListener("click", estadoAnterior);
  }
  if (btnSiguiente) {
    btnSiguiente.addEventListener("click", estadoSiguiente);
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", reset);
  }
  if (cambiarTurnoBtn) {
    cambiarTurnoBtn.addEventListener("click", cambiarTurno);
  }
}

// Espera a que el DOM esté completamente cargado para ejecutar las funciones
document.addEventListener("DOMContentLoaded", function () {
  actualizarDisplay();
  initEventListeners();
});
