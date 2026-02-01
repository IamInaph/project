import { useState } from 'react';

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'rating', label: 'Average rating' },
  { value: 'newest', label: 'Newness' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

const priceRanges = [
  { value: 'all', label: 'All' },
  { value: '0-50', label: '$0.00 - $50.00' },
  { value: '50-100', label: '$50.00 - $100.00' },
  { value: '100-150', label: '$100.00 - $150.00' },
  { value: '150-200', label: '$150.00 - $200.00' },
  { value: '200+', label: '$200.00+' },
];

const colorOptions = [
  { value: '#222', label: 'Black', icon: 'zmdi-circle' },
  { value: '#4272d7', label: 'Blue', icon: 'zmdi-circle' },
  { value: '#b3b3b3', label: 'Grey', icon: 'zmdi-circle' },
  { value: '#00ad5f', label: 'Green', icon: 'zmdi-circle' },
  { value: '#fa4251', label: 'Red', icon: 'zmdi-circle' },
  { value: '#fff', label: 'White', icon: 'zmdi-circle-o' },
];

export default function ProductFilter({ filters, onFilterChange, isOpen }) {
  const [activeSort, setActiveSort] = useState(filters?.sort || 'default');
  const [activePrice, setActivePrice] = useState(filters?.price || 'all');
  const [activeColor, setActiveColor] = useState(filters?.color || '');

  const handleSortChange = (value) => {
    setActiveSort(value);
    onFilterChange({ ...filters, sort: value });
  };

  const handlePriceChange = (value) => {
    setActivePrice(value);
    onFilterChange({ ...filters, price: value });
  };

  const handleColorChange = (value) => {
    const newColor = activeColor === value ? '' : value;
    setActiveColor(newColor);
    onFilterChange({ ...filters, color: newColor });
  };

  if (!isOpen) return null;

  return (
    <div className="dis-none panel-filter w-full p-t-10" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
        <div className="filter-col1 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Sort By</div>
          <ul>
            {sortOptions.map((option) => (
              <li key={option.value} className="p-b-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSortChange(option.value);
                  }}
                  className={`filter-link stext-106 trans-04 ${
                    activeSort === option.value ? 'filter-link-active' : ''
                  }`}
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-col2 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Price</div>
          <ul>
            {priceRanges.map((range) => (
              <li key={range.value} className="p-b-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePriceChange(range.value);
                  }}
                  className={`filter-link stext-106 trans-04 ${
                    activePrice === range.value ? 'filter-link-active' : ''
                  }`}
                >
                  {range.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-col3 p-r-15 p-b-27">
          <div className="mtext-102 cl2 p-b-15">Color</div>
          <ul>
            {colorOptions.map((color) => (
              <li key={color.value} className="p-b-6">
                <span className="fs-15 lh-12 m-r-6" style={{ color: color.value }}>
                  <i className={`zmdi ${color.icon}`}></i>
                </span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleColorChange(color.value);
                  }}
                  className={`filter-link stext-106 trans-04 ${
                    activeColor === color.value ? 'filter-link-active' : ''
                  }`}
                >
                  {color.label}
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
  );
}
