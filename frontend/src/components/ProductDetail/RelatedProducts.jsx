import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../Product/ProductCard';
import { products } from '../../data/products';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RelatedProducts({ currentProductId, category }) {
  const relatedProducts = products
    .filter((p) => p.id !== currentProductId && p.category === category)
    .slice(0, 8);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-20">
      <div className="container">
        <h3 className="ltext-103 text-[#333] text-center pb-12">
          Related Products
        </h3>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="related-products-slider"
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="pb-4">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .related-products-slider .swiper-button-next,
          .related-products-slider .swiper-button-prev {
            color: #333;
            width: 40px;
            height: 40px;
          }
          .related-products-slider .swiper-button-next::after,
          .related-products-slider .swiper-button-prev::after {
            font-size: 16px;
          }
        `}</style>
      </div>
    </section>
  );
}
