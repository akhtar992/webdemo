let cart = [];
function checkout() {
  if (cart.length === 0) {
    alert('Cart is empty!');
  } else {
    alert('Proceeding to checkout...');
    window.location.href = "checkout.html";
  }
}
