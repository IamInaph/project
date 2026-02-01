import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    image: '/images/banner-01.jpg',
    category: 'Women',
    subtitle: 'Spring 2018',
  },
  {
    id: 2,
    image: '/images/banner-02.jpg',
    category: 'Men',
    subtitle: 'Spring 2018',
  },
  {
    id: 3,
    image: '/images/banner-03.jpg',
    category: 'Accessories',
    subtitle: 'New Trend',
  },
];

export default function BannerSection() {
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          {banners.map((banner) => (
            <div key={banner.id} className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              <div className="block1 wrap-pic-w">
                <img src={banner.image} alt="IMG-BANNER" />

                <Link
                  to="/shop"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      {banner.category}
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      {banner.subtitle}
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
