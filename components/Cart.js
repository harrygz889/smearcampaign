import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import formatMoney from '../lib/formatMoney';
import { useUser } from './User';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import { Checkout } from './Checkout';
import CartItem from './CartItem';
import calcShippingPrice from '../lib/calcShippingPrice';

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();

  // check for signed in user
  if (!me) return null;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <p>Shipping: {formatMoney(calcShippingPrice(me.cart))}</p>
        <p>
          Total:{' '}
          {formatMoney(calcShippingPrice(me.cart) + calcTotalPrice(me.cart))}
        </p>
        <Checkout />
      </footer>
      <br />
    </CartStyles>
  );
}
