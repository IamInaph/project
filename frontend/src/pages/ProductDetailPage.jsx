import { useParams, Navigate, Link } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import ProductGallery from '../components/ProductDetail/ProductGallery';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductTabs from '../components/ProductDetail/ProductTabs';
import RelatedProducts from '../components/ProductDetail/RelatedProducts';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
          </Link>

          <Link to="/shop" className="stext-109 cl8 hov-cl1 trans-04">
            Shop
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
          </Link>

          <span className="stext-109 cl4">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <ProductGallery images={product.images} />
            </div>

            <div className="col-md-6 col-lg-5 p-b-30">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <ProductTabs product={product} />

      {/* Related Products */}
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
      />
    </>
  );
}
