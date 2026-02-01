import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/images/slide-01.jpg',
    subtitle: 'Women Collection 2018',
    title: 'NEW SEASON',
  },
  {
    id: 2,
    image: '/images/slide-02.jpg',
    subtitle: 'Men New-Season',
    title: 'Jackets & Coats',
  },
  {
    id: 3,
    image: '/images/slide-03.jpg',
    subtitle: 'Men Collection 2018',
    title: 'New arrivals',
  },
];

export default function HeroSlider() {
  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            prevEl: '.wrap-slick1 .slick-prev',
            nextEl: '.wrap-slick1 .slick-next',
          }}
          pagination={{
            clickable: true,
            el: '.wrap-slick1 .slick-dots',
          }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          className="slick1"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="item-slick1"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div className="layer-slick1 animated fadeInDown">
                      <span className="ltext-101 cl2 respon2">
                        {slide.subtitle}
                      </span>
                    </div>

                    <div className="layer-slick1 animated fadeInUp" style={{ animationDelay: '0.8s' }}>
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        {slide.title}
                      </h2>
                    </div>

                    <div className="layer-slick1 animated zoomIn" style={{ animationDelay: '1.6s' }}>
                      <Link
                        to="/shop"
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .section-slide .swiper-button-next,
        .section-slide .swiper-button-prev {
          color: #333;
          width: 50px;
          height: 100%;
          top: 0;
          margin-top: 0;
        }
        .section-slide .swiper-button-prev {
          left: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.05), transparent);
        }
        .section-slide .swiper-button-next {
          right: 0;
          background: linear-gradient(to left, rgba(0,0,0,0.05), transparent);
        }
        .section-slide .swiper-button-next::after,
        .section-slide .swiper-button-prev::after {
          font-size: 24px;
        }
        .section-slide .swiper-pagination {
          bottom: 30px;
        }
        .section-slide .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background: transparent;
          border: 2px solid #333;
          opacity: 0.6;
        }
        .section-slide .swiper-pagination-bullet-active {
          background: #333;
          opacity: 1;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        .fadeInDown { animation-name: fadeInDown; }
        .fadeInUp { animation-name: fadeInUp; }
        .zoomIn { animation-name: zoomIn; }
      `}</style>
    </section>
  );
}
