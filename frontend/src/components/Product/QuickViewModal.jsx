import { useState } from 'react';
import { Link } from 'react-router-dom';
import useUIStore from '../../store/uiStore';
import useCartStore from '../../store/cartStore';
import useWishlistStore from '../../store/wishlistStore';

export default function QuickViewModal() {
  const { isQuickViewOpen, quickViewProduct, closeQuickView } = useUIStore();
  const addToCart = useCartStore((state) => state.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    closeQuickView();
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={`wrap-modal1 js-modal1 p-t-60 p-b-20 ${isQuickViewOpen ? 'show-modal1' : ''}`}>
      <div className="overlay-modal1 js-hide-modal1" onClick={closeQuickView}></div>

      <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button className="how-pos3 hov3 trans-04 js-hide-modal1" onClick={closeQuickView}>
            <img src="/images/icons/icon-close.png" alt="CLOSE" />
          </button>

          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-pic-w">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product.name}
                </h4>

                <span className="mtext-106 cl2">
                  ${product.price.toFixed(2)}
                </span>

                <p className="stext-102 cl3 p-t-23">
                  {product.description || 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'}
                </p>

                <div className="p-t-33">
                  {/* Size Selector */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">
                        Size
                      </div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select
                            className="js-select2"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            style={{ width: '100%', padding: '10px', border: 'none', outline: 'none' }}
                          >
                            <option value="">Choose an option</option>
                            {product.sizes.map((size) => (
                              <option key={size} value={size}>Size {size}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Color Selector */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">
                        Color
                      </div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select
                            className="js-select2"
                            value={selectedColor}
                            onChange={(e) => setSelectedColor(e.target.value)}
                            style={{ width: '100%', padding: '10px', border: 'none', outline: 'none' }}
                          >
                            <option value="">Choose an option</option>
                            {product.colors.map((color) => (
                              <option key={color} value={color}>{color}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quantity and Add to Cart */}
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                        <div
                          className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                          onClick={decreaseQuantity}
                        >
                          <i className="fs-16 zmdi zmdi-minus"></i>
                        </div>

                        <input
                          className="mtext-104 cl3 txt-center num-product"
                          type="number"
                          name="num-product"
                          value={quantity}
                          readOnly
                        />

                        <div
                          className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                          onClick={increaseQuantity}
                        >
                          <i className="fs-16 zmdi zmdi-plus"></i>
                        </div>
                      </div>

                      <button
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                        onClick={handleAddToCart}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Wishlist & Social */}
                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div className="flex-m bor9 p-r-10 m-r-11">
                    <a
                      href="#"
                      className={`fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 tooltip100 ${isWishlisted ? 'cl1' : ''}`}
                      data-tooltip={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleItem(product);
                      }}
                    >
                      <i className={`zmdi ${isWishlisted ? 'zmdi-favorite' : 'zmdi-favorite-outline'}`}></i>
                    </a>
                  </div>

                  <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>

                  <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>

                {/* View Details Link */}
                <div className="p-t-30">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={closeQuickView}
                    className="stext-101 cl2 hov-cl1 trans-04"
                  >
                    View Full Details <i className="zmdi zmdi-arrow-right m-l-5"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
