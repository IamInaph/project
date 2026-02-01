import { Link, useLocation } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useWishlistStore from '../../store/wishlistStore';
import useUIStore from '../../store/uiStore';

export default function DesktopNav({ isScrolled }) {
  const location = useLocation();
  const cartCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.getItemCount());
  const { openCart, openSearch } = useUIStore();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/cart', label: 'Features', isHot: true },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div
      className={`fixed z-[1100] w-full top-10 left-0 hidden lg:block transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md !top-0 h-[70px]' : 'bg-transparent h-[84px]'
      }`}
    >
      <nav className="container h-full flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center h-[65%] mr-14">
          <img
            src="/images/icons/logo-01.png"
            alt="Logo"
            className="max-w-full max-h-full"
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center h-full">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.path} className="relative py-5 px-0 pr-2.5 ml-3.5 mr-1">
                <Link
                  to={link.path}
                  className={`text-sm font-medium trans-04 py-1.5 ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-[#333] hover:text-primary'
                  } ${link.isHot ? 'label1' : ''}`}
                  data-label1={link.isHot ? 'hot' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex-grow flex justify-end items-center">
          <button
            onClick={openSearch}
            className="text-[26px] leading-none cursor-pointer text-[#333] hover:text-primary trans-04 pl-5 pr-3"
          >
            <i className="zmdi zmdi-search"></i>
          </button>

          <button
            onClick={openCart}
            className="relative text-[26px] leading-none cursor-pointer text-[#333] hover:text-primary trans-04 pl-5 pr-3"
          >
            <i className="zmdi zmdi-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-1 min-w-[15px] h-[15px] bg-primary text-white text-[10px] rounded-full flex-c-m">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            to="/wishlist"
            className="relative text-[26px] leading-none text-[#333] hover:text-primary trans-04 pl-5 pr-3"
          >
            <i className="zmdi zmdi-favorite-outline"></i>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-1 min-w-[15px] h-[15px] bg-primary text-white text-[10px] rounded-full flex-c-m">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}
