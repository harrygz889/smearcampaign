export default function calcShippingPrice(cart) {
  const reducer = (tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be removed from server, but still in cart
    return tally + cartItem.quantity * cartItem.product.shippingPrice;
  };

  return cart.reduce(reducer, 0);
}
