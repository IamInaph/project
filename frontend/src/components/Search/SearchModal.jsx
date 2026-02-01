import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUIStore from '../../store/uiStore';

export default function SearchModal() {
  const [searchQuery, setSearchQuery] = useState('');
  const { isSearchOpen, closeSearch } = useUIStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      closeSearch();
      setSearchQuery('');
    }
  };

  return (
    <div className={`modal-search-header flex-c-m trans-04 ${isSearchOpen ? 'show-modal-search' : ''}`}>
      <div className="container-search-header">
        <button
          className="flex-c-m btn-hide-modal-search trans-04"
          onClick={closeSearch}
        >
          <img src="/images/icons/icon-close2.png" alt="CLOSE" />
        </button>

        <form className="wrap-search-header flex-w p-l-15" onSubmit={handleSubmit}>
          <button className="flex-c-m trans-04" type="submit">
            <i className="zmdi zmdi-search"></i>
          </button>
          <input
            className="plh3"
            type="text"
            name="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus={isSearchOpen}
          />
        </form>
      </div>
    </div>
  );
}
