import { Link } from 'react-router-dom';
import useWishlistStore from '../../store/wishlistStore';
import useUIStore from '../../store/uiStore';

export default function ProductCard({ product }) {
  const { toggleItem, isInWishlist } = useWishlistStore();
  const openQuickView = useUIStore((state) => state.openQuickView);

  const isWishlisted = isInWishlist(product.id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleItem(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    openQuickView(product);
  };

  return (
    <div className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}`}>
      <div className="block2">
        <div className="block2-pic hov-img0">
          <img src={product.image} alt="IMG-PRODUCT" />

          <a
            href="#"
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
            onClick={handleQuickView}
          >
            Quick View
          </a>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l">
            <Link
              to={`/product/${product.id}`}
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {product.name}
            </Link>

            <span className="stext-105 cl3">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="block2-txt-child2 flex-r p-t-3">
            <a
              href="#"
              className={`btn-addwish-b2 dis-block pos-relative ${isWishlisted ? 'js-addedwish-b2' : ''}`}
              onClick={handleToggleWishlist}
            >
              <img
                className="icon-heart1 dis-block trans-04"
                src="/images/icons/icon-heart-01.png"
                alt="ICON"
              />
              <img
                className="icon-heart2 dis-block trans-04 ab-t-l"
                src="/images/icons/icon-heart-02.png"
                alt="ICON"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
