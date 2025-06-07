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

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".snacks-grid");
  snacks.forEach(snack => {
    grid.appendChild(createSnackCard(snack));
  });
});