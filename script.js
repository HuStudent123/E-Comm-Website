let cart = [];

function addToCart(productName) {
  cart.push(productName);
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order submitted successfully!");
  cart = [];
  displayCart();
});