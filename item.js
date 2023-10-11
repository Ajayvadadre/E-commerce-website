const addToCartButton = document.getElementById('add-to-cart-btn');
const cartItemsList = document.getElementById('cart-items');
let cartItems = [];

addToCartButton.addEventListener('click', addToCart);

function addToCart() {
  const item = {
    name: 'Product Name',
    price: 10.00
  };
  cartItems.push(item);
  renderCart();
}

function renderCart() {
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
  });
}
