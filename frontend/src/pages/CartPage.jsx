import Breadcrumb from '../components/UI/Breadcrumb';
import ShoppingCart from '../components/Cart/ShoppingCart';

export default function CartPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Shopping Cart' },
        ]}
        title="Shopping Cart"
      />

      <ShoppingCart />
    </>
  );
}
