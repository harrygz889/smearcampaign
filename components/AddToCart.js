import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY, useUser } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $size: String) {
    addToCart(productId: $id, size: $size) {
      id
      size
    }
  }
`;

export default function AddToCart({ id, choseSize, size }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id, size },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const user = useUser();

  if (!user)
    return (
      <button disabled type="button" onClick={addToCart}>
        Add{loading && 'ing'} To Cart 🛒 {!user && ' -- (Please Sign In)'}
      </button>
    );

  return (
    <button disabled={!choseSize} type="button" onClick={addToCart}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
}
