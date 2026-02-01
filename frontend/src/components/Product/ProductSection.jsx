import { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../../data/products';

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  let filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Product Overview</h3>
        </div>

        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === cat.slug ? 'how-active1' : ''
                }`}
              >
                {cat.name === 'All' ? 'All Products' : cat.name}
              </button>
            ))}
          </div>

          <div className="flex-w flex-c-m m-tb-10">
            <div
              className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4"
              onClick={() => { setShowFilter(!showFilter); setShowSearch(false); }}
            >
              <i className={`icon-filter cl2 m-r-6 fs-15 trans-04 zmdi ${showFilter ? 'zmdi-close' : 'zmdi-filter-list'}`}></i>
              Filter
            </div>

            <div
              className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4"
              onClick={() => { setShowSearch(!showSearch); setShowFilter(false); }}
            >
              <i className={`icon-search cl2 m-r-6 fs-15 trans-04 zmdi ${showSearch ? 'zmdi-close' : 'zmdi-search'}`}></i>
              Search
            </div>
          </div>

          {/* Search product */}
          <div className={`${showSearch ? 'show-search' : 'dis-none'} panel-search w-full p-t-10 p-b-15`}>
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input
                className="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter */}
          <div className={`${showFilter ? 'show-filter' : 'dis-none'} panel-filter w-full p-t-10`}>
            <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
              <div className="filter-col1 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Sort By</div>
                <ul>
                  {['Default', 'Popularity', 'Average rating', 'Newness', 'Price: Low to High', 'Price: High to Low'].map((item, i) => (
                    <li key={i} className="p-b-6">
                      <a href="#" className={`filter-link stext-106 trans-04 ${i === 3 ? 'filter-link-active' : ''}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-col2 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Price</div>
                <ul>
                  {['All', '$0.00 - $50.00', '$50.00 - $100.00', '$100.00 - $150.00', '$150.00 - $200.00', '$200.00+'].map((item, i) => (
                    <li key={i} className="p-b-6">
                      <a href="#" className={`filter-link stext-106 trans-04 ${i === 0 ? 'filter-link-active' : ''}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-col3 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Color</div>
                <ul>
                  {[
                    { color: '#222', name: 'Black' },
                    { color: '#4272d7', name: 'Blue', active: true },
                    { color: '#b3b3b3', name: 'Grey' },
                    { color: '#00ad5f', name: 'Green' },
                    { color: '#fa4251', name: 'Red' },
                    { color: '#aaa', name: 'White', icon: 'zmdi-circle-o' },
                  ].map((item, i) => (
                    <li key={i} className="p-b-6">
                      <span className="fs-15 lh-12 m-r-6" style={{ color: item.color }}>
                        <i className={`zmdi ${item.icon || 'zmdi-circle'}`}></i>
                      </span>
                      <a href="#" className={`filter-link stext-106 trans-04 ${item.active ? 'filter-link-active' : ''}`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-col4 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Tags</div>
                <div className="flex-w p-t-4 m-r--5">
                  {['Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts'].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row isotope-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex-c-m flex-w w-full p-t-45">
          <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
            Load More
          </a>
        </div>
      </div>
    </section>
  );
}
