import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const router = useRouter();

  function handleSignOut() {
    signout();
    router.push({
      pathname: '/',
    });
  }
  return (
    <button type="button" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
