console.log("modal.js cargado");

// Referencias a elementos

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

// Abrir modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Cerrar modal con la X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar clickeando fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
