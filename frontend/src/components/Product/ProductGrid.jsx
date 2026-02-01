import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { products, categories } from '../../data/products';

export default function ProductGrid({ initialCategory = 'all' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filters, setFilters] = useState({
    sort: 'default',
    price: 'all',
    color: '',
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
    }

    if (filters.price !== 'all') {
      const [min, max] = filters.price.split('-').map(Number);
      result = result.filter((p) => {
        if (filters.price === '200+') return p.price >= 200;
        return p.price >= min && p.price <= max;
      });
    }

    switch (filters.sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, searchQuery, filters]);

  return (
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
            className={`flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 ${isFilterOpen ? 'show-filter' : ''}`}
            onClick={() => {
              setIsFilterOpen(!isFilterOpen);
              setIsSearchOpen(false);
            }}
          >
            <i className={`icon-filter cl2 m-r-6 fs-15 trans-04 zmdi ${isFilterOpen ? 'zmdi-close' : 'zmdi-filter-list'}`}></i>
            Filter
          </div>

          <div
            className={`flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 ${isSearchOpen ? 'show-search' : ''}`}
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsFilterOpen(false);
            }}
          >
            <i className={`icon-search cl2 m-r-6 fs-15 trans-04 zmdi ${isSearchOpen ? 'zmdi-close' : 'zmdi-search'}`}></i>
            Search
          </div>
        </div>

        {/* Search product */}
        <div className={`${isSearchOpen ? 'show-search' : 'dis-none'} panel-search w-full p-t-10 p-b-15`}>
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
        <ProductFilter
          filters={filters}
          onFilterChange={setFilters}
          isOpen={isFilterOpen}
        />
      </div>

      <div className="row isotope-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-12 p-t-50 p-b-50 txt-center">
            <p className="stext-107 cl6">No products found</p>
          </div>
        )}
      </div>

      {filteredProducts.length >= 8 && (
        <div className="flex-c-m flex-w w-full p-t-45">
          <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
            Load More
          </a>
        </div>
      )}
    </div>
  );
}
