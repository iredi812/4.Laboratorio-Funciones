// Función que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const displayTurno = document.querySelector(".numero-turno");
  let turno: number = 1;

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

  // Función que reinicia el turno a 1
  function reset() {
    turno = 1;
    actualizarDisplay();
    //Limpiamos input
    const inputTurno = document.getElementById(
      "turnoInput"
    ) as HTMLInputElement;
    if (inputTurno) {
      inputTurno.value = "";
    }
  }

  // Función que cambia el turno a un valor específico que pasamos al input
  function cambiarTurno() {
    const inputTurno = document.getElementById(
      "turnoInput"
    ) as HTMLInputElement;
    if (inputTurno) {
      turno = parseInt(inputTurno.value);
      actualizarDisplay();
    }
  }

  // Obtenemos los botones y les asignamos los eventos
  const btnAnterior = document.getElementById("anteriorBtn");
  const btnSiguiente = document.getElementById("siguienteBtn");
  const resetBtn = document.getElementById("resetBtn");
  const cambiarTurnoBtn = document.getElementById("cambiarTurnoBtn");

  // Si los botones existen y son de tipo HTMLButtonElement, les asignamos los eventos
  if (
    btnAnterior !== null &&
    btnAnterior !== undefined &&
    btnAnterior instanceof HTMLButtonElement
  ) {
    btnAnterior.addEventListener("click", estadoAnterior);
  }
  if (
    btnSiguiente !== null &&
    btnSiguiente !== undefined &&
    btnSiguiente instanceof HTMLButtonElement
  ) {
    btnSiguiente.addEventListener("click", estadoSiguiente);
  }
  if (
    resetBtn !== null &&
    resetBtn !== undefined &&
    resetBtn instanceof HTMLButtonElement
  ) {
    resetBtn.addEventListener("click", reset);
  }

  if (
    cambiarTurnoBtn !== null &&
    cambiarTurnoBtn !== undefined &&
    cambiarTurnoBtn instanceof HTMLButtonElement
  ) {
    cambiarTurnoBtn.addEventListener("click", cambiarTurno);
  }

  actualizarDisplay();
});
