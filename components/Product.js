import Link from 'next/link';
import { useState } from 'react';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';

export default function Product({ product }) {
  const [choseSize, setChoseSize] = useState(false);
  const [sizeValue, setSizeValue] = useState(null);

  if (choseSize && (sizeValue === null || sizeValue === '')) {
    setChoseSize(false);
  }

  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <div className="buttonList">
        {/* <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit
        </Link> */}
        <AddToCart id={product.id} choseSize={choseSize} size={sizeValue} />
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
        </select>

        {/* <DeleteProduct id={product.id}>Delete</DeleteProduct> */}
      </div>
    </ItemStyles>
  );
}
