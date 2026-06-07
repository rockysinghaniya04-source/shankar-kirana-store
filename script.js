let cart = [];
let total = 0;

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("total-price").innerText = total;

}

function searchProducts() {

  let input =
    document.getElementById("search").value.toLowerCase();

  let products =
    document.querySelectorAll(".product-card");

  products.forEach(product => {

    let title =
      product.querySelector("h3").innerText.toLowerCase();

    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });

}

function sendWhatsAppOrder() {

  let orderText = "🛒 Shankar Kirana Store Order%0A%0A";

  cart.forEach(item => {
    orderText +=
      item.name + " - ₹" + item.price + "%0A";
  });

  orderText += "%0A💰 Total = ₹" + total;

  window.open(
    "https://wa.me/916202054884?text=" + orderText,
    "_blank"
  );

}

setInterval(() => {

  const blink =
    document.getElementById("offer");

  if (blink) {

    blink.style.visibility =
      blink.style.visibility === "hidden"
      ? "visible"
      : "hidden";

  }

}, 700);
