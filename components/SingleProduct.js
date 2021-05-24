import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';
import AddToCart from './AddToCart';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  /* display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column; */
  display: flex;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
  /* gap: 2rem; */
  img {
    width: 100%;
    object-fit: contain;
  }
  .details {
    padding-left: 5rem;
    font-size: 2rem;
    padding-top: none;
    padding-bottom: none;
    margin: 0;
    width: 100%;
    @media (max-width: 750px) {
      /* display: flex;
      flex-direction: column;
      justify-content: center; */
      text-align: center;
      padding: 0;
    }
    h2 {
      margin: 0;
      margin-bottom: 2rem;
    }
    p {
      padding: 0;
      margin: 0;
    }
    span {
      font-family: Roboto;
    }
    .options {
      margin-top: 2rem;
    }
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const [choseSize, setChoseSize] = useState(false);
  const [sizeValue, setSizeValue] = useState('notset');

  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError errror={error} />;

  if (choseSize && (sizeValue === 'notset' || sizeValue === '')) {
    setChoseSize(false);
  }
  return (
    <ProductStyles>
      <Head>
        <title>Smear Campaign | {data.Product.name}</title>
      </Head>
      <img
        src={data.Product.photo.image.publicUrlTransformed}
        alt={data.Product.name}
      />
      <div className="details">
        <h2>{data.Product.name}</h2>
        <span>{data.Product.description}</span>
        <p className="options">
          <select
            name="size"
            id="size-select"
            value={sizeValue}
            onChange={() => {
              setSizeValue(event.target.value);
              setChoseSize(true);
            }}
          >
            <option value="">Choose a size --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="XLarge">XL</option>
          </select>
        </p>
        <p>
          <AddToCart id={id} choseSize={choseSize} size={sizeValue} />
        </p>
      </div>
    </ProductStyles>
  );
}
