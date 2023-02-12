let cart = [];

function addToCart(productId, productName, productPrice) {
  let product = {
    id: productId,
    name: productName,
    price: productPrice,
  };
  cart.push(product);
  updateCartDisplay();
}

function removeFromCart(productId) {
  let productIndex = cart.findIndex((product) => product.id === productId);
  cart.splice(productIndex, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  let cartList = document.querySelector("#cart");
  let totalAmount = document.querySelector("#total-amount");
  cartList.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let x=Number(item.price);
    total += x;
    let itemNode = document.createElement("li");
    itemNode.innerHTML =
      item.name +
      " - $" +
      x +
      " <button class='btn btn-danger remove-from-cart' data-product-id='" +
      item.id +
      "' >Remove</button>";
    cartList.appendChild(itemNode);
  }
  totalAmount.innerHTML = "Total Amount: $" + total;
  let removeButtons = document.querySelectorAll(".remove-from-cart");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function () {
      let productId = this.dataset.productId;
      removeFromCart(productId);
    });
  }
}

let addButtons = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function () {
    let productId = this.dataset.productId;
    let productName = this.dataset.productName;
    let productPrice = this.dataset.productPrice;
    addToCart(productId, productName, productPrice);
  });
}

updateCartDisplay();

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

