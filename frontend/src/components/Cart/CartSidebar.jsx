import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useUIStore from '../../store/uiStore';

export default function CartSidebar() {
  const { items, removeItem, getTotal } = useCartStore();
  const { isCartOpen, closeCart } = useUIStore();

  return (
    <div className={`wrap-header-cart ${isCartOpen ? 'show-header-cart' : ''}`}>
      <div className="s-full js-hide-cart" onClick={closeCart}></div>

      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Your Cart</span>
          <div
            className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart"
            onClick={closeCart}
          >
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>

        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {items.length === 0 ? (
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-txt p-t-8">
                  <span className="header-cart-item-info">Your cart is empty</span>
                </div>
              </li>
            ) : (
              items.map((item, index) => (
                <li
                  key={`${item.id}-${item.size}-${item.color}-${index}`}
                  className="header-cart-item flex-w flex-t m-b-12"
                >
                  <div
                    className="header-cart-item-img"
                    onClick={() => removeItem(item.id, item.size, item.color)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="header-cart-item-txt p-t-8">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      {item.name}
                    </Link>

                    <span className="header-cart-item-info">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              Total: ${getTotal().toFixed(2)}
            </div>

            <div className="header-cart-buttons flex-w w-full">
              <Link
                to="/cart"
                onClick={closeCart}
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
              >
                View Cart
              </Link>

              <a
                href="#"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
