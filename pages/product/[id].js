import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  // const { data, loading, error } = useQuery();
  return <SingleProduct id={query.id} />;
}
