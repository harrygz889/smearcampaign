import Link from 'next/link';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();

  const reducer = (tally, cartItem) =>
    tally + (cartItem.product ? cartItem.quantity : 0);

  return (
    <NavStyles>
      <Link href="/products">products</Link>
      {user && (
        <>
          {/* <Link href="/sell">sell</Link> */}
          <Link href="/orders">orders</Link>
          {/* <Link href="/account">account</Link> */}
          <SignOut />
          <button type="button" onClick={openCart}>
            My Cart
            <CartCount count={user.cart.reduce(reducer, 0)} />
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
