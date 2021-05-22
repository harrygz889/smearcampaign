import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import SickButton from './styles/SickButton';
import { useCart } from '../lib/cartState';
import { CURRENT_USER_QUERY } from './User';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!, $address: String!) {
    checkout(token: $token, address: $address) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();
  // form variables
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  // should checkout button be disabled?
  const [hasConfirmedAddress, setHasConfirmedAddress] = useState(false);

  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e) {
    // 1. stop the form from submitting and turn loader on
    e.preventDefault();
    setLoading(true);
    console.log('Submit Checkout TODO');
    // 2. start the page transition
    nProgress.start();
    // 3. create the payment method via stripe (token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    // 4. concat address
    const fullAddress = `${address} ${city}, ${state} ${postalCode}`.toUpperCase();
    console.log(paymentMethod);
    // 4. handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return;
    }
    // 5. send token via custom mutation
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
        address: fullAddress,
      },
    });
    console.log('Finshed with the order');
    console.log(order);
    // 6. change the page to view the order
    router.push({
      pathname: '/order/[id]',
      query: { id: order.data.checkout.id },
    });
    // 5. Clear form fields
    setAddress('');
    setCity('');
    setState('');
    setPostalCode('');
    elements.getElement(CardElement).clear();
    // 7. close the cart
    closeCart();
    // 8. turn the loader off
    setLoading(false);
    nProgress.done();
  }

  if (
    !hasConfirmedAddress &&
    address.length &&
    city.length &&
    state.length &&
    postalCode.length
  ) {
    setHasConfirmedAddress(true);
  }
  if (
    hasConfirmedAddress &&
    (!address.length || !city.length || !state.length || !postalCode.length)
  ) {
    setHasConfirmedAddress(false);
  }
  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
      <input
        type="text"
        placeholder="Street Address"
        value={address}
        onChange={() => setAddress(event.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={() => setCity(event.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={() => setState(event.target.value)}
      />
      <input
        type="text"
        placeholder="Postal Code"
        value={postalCode}
        onChange={() => setPostalCode(event.target.value)}
      />
      <CardElement />
      <SickButton disabled={!hasConfirmedAddress}>check out now</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };
