// Add event listener to Add to Cart button
const addToCartButton = document.querySelector('.btn2');
addToCartButton.addEventListener('click', addToCart);

// Add to Cart function
function addToCart() {
  // Get product information
  const productName = document.querySelector('.product-name').textContent;
  const productPrice = document.querySelector('.product-price').textContent;
  
  // Create new cart item
  const cartItem = {
    name: productName,
    price: productPrice,
    quantity: 1
  };
  
  // Add cart item to cart
  let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  let cartTotal = localStorage.getItem('cartTotal') ? parseInt(localStorage.getItem('cartTotal')) : 0;
  
  let itemAlreadyInCart = false;
  cartItems.forEach(item => {
    if (item.name === cartItem.name) {
      item.quantity++;
      itemAlreadyInCart = true;
    }
  });
  
  if (!itemAlreadyInCart) {
    cartItems.push(cartItem);
  }
  
  cartTotal += parseInt(productPrice);
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartTotal', cartTotal.toString());
  
  alert('Product added to cart!');
}
