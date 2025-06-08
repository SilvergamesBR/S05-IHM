
const snacks = [
  {
    emoji: "🥐",
    title: "Croissant",
    description: "Folhado fresco de manteiga.",
    price: "R$ 4,50"
  },
  {
    emoji: "☕",
    title: "Café Expresso",
    description: "Café quente e encorpado.",
    price: "R$ 3,00"
  },
  {
    emoji: "🍰",
    title: "Bolo de Chocolate",
    description: "Fatia generosa com cobertura.",
    price: "R$ 6,00"
  },
  {
    emoji: "🥤",
    title: "Refrigerante",
    description: "Lata gelada de 350ml.",
    price: "R$ 4,00"
  }
];

function showPixModal() {
  const pixModal = document.getElementById("pixModal");
  if (pixModal) {
    pixModal.style.display = "flex";
    pixModal.classList.remove("hidden");
    pixModal.classList.add("show");
  }
}

function showValidationModal() {
  const pixModal = document.getElementById("pixModal");
  const validateModal = document.getElementById("validateModal");
  
  if (pixModal && validateModal) {
    pixModal.style.display = "none";
    pixModal.classList.add("hidden");
    pixModal.classList.remove("show");
    
    validateModal.style.display = "flex";
    validateModal.classList.remove("hidden");
    validateModal.classList.add("show");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    modal.classList.add("hidden");
    modal.classList.remove("show");
  }
}

function createSnackCard(snack) {
  const card = document.createElement("div");
  card.className = "snack-card";

  card.innerHTML = `
      <div class="emoji">${snack.emoji}</div>
      <h2 class="snack-title">${snack.title}</h2>
      <p class="snack-desc">${snack.description}</p>
      <div class="snack-footer">
        <span class="snack-price">${snack.price}</span>
        <button class="buy-btn">Comprar</button>
      </div>
    `;

  const buyButton = card.querySelector(".buy-btn");
  buyButton.addEventListener("click", showPixModal);

  return card;
}

const grid = document.querySelector(".snacks-grid");
if (grid) {
  snacks.forEach(snack => {
    grid.appendChild(createSnackCard(snack));
  });
} else {
  console.error("snacks-grid not found in DOM");
}

window.showValidationModal = showValidationModal;
window.closeModal = closeModal;
