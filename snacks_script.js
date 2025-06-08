
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
  console.log("Modal should open for:", event.currentTarget);
  const pixModal = document.getElementById("pixModal");
  if (pixModal) {
    pixModal.classList.remove("hidden");
  } else {
    console.warn("Pix modal not found in DOM.");
  }
}

function showValidationModal() {
  const pixModal = document.getElementById("pixModal");
  const validateModal = document.getElementById("validateModal");
  if (pixModal && validateModal) {
    pixModal.classList.add("hidden");
    validateModal.classList.remove("hidden");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hidden");
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
