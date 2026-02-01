import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export default function ProductGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="product-gallery-main mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden">
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="product-gallery-thumbs"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer overflow-hidden border-2 border-transparent hover:border-primary trans-03">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .product-gallery-main .swiper-button-next,
        .product-gallery-main .swiper-button-prev {
          color: #333;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .product-gallery-main .swiper-button-next::after,
        .product-gallery-main .swiper-button-prev::after {
          font-size: 14px;
        }
        .product-gallery-thumbs .swiper-slide-thumb-active > div {
          border-color: #717fe0;
        }
      `}</style>
    </div>
  );
}
