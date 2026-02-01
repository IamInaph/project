import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import ProductGrid from '../components/Product/ProductGrid';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Shop' },
        ]}
        title="Shop"
      />

      <section className="bg0 p-t-23 p-b-140">
        <ProductGrid initialCategory={category} />
      </section>
    </>
  );
}
