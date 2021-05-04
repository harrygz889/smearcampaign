export default function calcTotalPrice(cart) {
  const reducer = (tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be removed from server, but still in cart
    return tally + cartItem.quantity * cartItem.product.price;
  };

  return cart.reduce(reducer, 0);
}
