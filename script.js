const products = [
  { code: "001", name: "Coca-Cola", price: 5.0 },
  { code: "002", name: "Farinha", price: 3.5 },
  { code: "003", name: "Arroz", price: 4.0 },
  { code: "004", name: "Feijão", price: 6.0 },
  { code: "005", name: "Macarrão", price: 2.5 },
  { code: "006", name: "Açúcar", price: 3.0 },
  { code: "007", name: "Sal", price: 1.5 },
  { code: "008", name: "Óleo", price: 7.0 },
  { code: "009", name: "Manteiga", price: 8.0 },
  { code: "010", name: "Leite", price: 3.8 },
  { code: "011", name: "Café", price: 5.7 },
  { code: "012", name: "Bolacha", price: 2.3 },
  { code: "013", name: "Chocolate", price: 4.5 },
  { code: "014", name: "Sabão", price: 2.7 },
  { code: "015", name: "Detergente", price: 2.0 },
  { code: "016", name: "Papel Higiênico", price: 6.5 },
  { code: "017", name: "Shampoo", price: 9.0 },
  { code: "018", name: "Condicionador", price: 9.5 },
  { code: "019", name: "Pasta de Dente", price: 3.2 },
  { code: "020", name: "Desodorante", price: 10.0 },
];

let cart = [];
let totalPrice = 0;

function addProduct() {
  const productCode = document.getElementById("product-code").value;
  const product = products.find((p) => p.code === productCode);

  if (product) {
    cart.push(product);
    totalPrice += product.price;
    updateCart();
  } else {
    alert("Produto não encontrado!");
  }

  document.getElementById("product-code").value = "";
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function finishPurchase() {
  document.getElementById("amount-paid").style.display = "block";
  alert("Compra finalizada");
}

function calculateChange() {
  const amountPaid = parseFloat(document.getElementById("amount-paid").value);
  const change = amountPaid - totalPrice;

  if (change < 0) {
    document.getElementById("change").textContent = "Valor insuficiente!";
  } else {
    document.getElementById("change").textContent = `Troco: $${change.toFixed(
      2
    )}`;
  }
}
