import { Link, useLocation } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useWishlistStore from '../../store/wishlistStore';
import useUIStore from '../../store/uiStore';

export default function MobileNav() {
  const location = useLocation();
  const cartCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.getItemCount());
  const { openCart, openSearch, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/cart', label: 'Features', isHot: true },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-[1100] bg-white shadow-sm">
        <div className="flex items-center justify-between h-[60px] px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center h-[50px]">
            <img
              src="/images/icons/logo-01.png"
              alt="Logo"
              className="max-h-full"
            />
          </Link>

          {/* Icons */}
          <div className="flex items-center">
            <button
              onClick={openSearch}
              className="text-[22px] text-[#333] hover:text-primary trans-04 p-2"
            >
              <i className="zmdi zmdi-search"></i>
            </button>

            <button
              onClick={openCart}
              className="relative text-[22px] text-[#333] hover:text-primary trans-04 p-2"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 min-w-[15px] h-[15px] bg-primary text-white text-[10px] rounded-full flex-c-m">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              to="/wishlist"
              className="relative text-[22px] text-[#333] hover:text-primary trans-04 p-2"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 min-w-[15px] h-[15px] bg-primary text-white text-[10px] rounded-full flex-c-m">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className={`hamburger hamburger--squeeze ml-2 ${isMobileMenuOpen ? 'is-active' : ''}`}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-[1200] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-[280px] h-full bg-white z-[1300] transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Bar Mobile */}
        <ul className="bg-[#222]">
          <li className="px-5 py-2 border-t border-white/5">
            <div className="text-[#b2b2b2] text-xs">
              Free shipping for standard order over $100
            </div>
          </li>
          <li className="px-5 py-2 border-t border-white/5">
            <div className="flex flex-wrap">
              <a href="#" className="text-[#b2b2b2] text-xs trans-04 pr-4 hover:text-primary">
                Help & FAQs
              </a>
              <a href="#" className="text-[#b2b2b2] text-xs trans-04 pr-4 hover:text-primary">
                My Account
              </a>
              <a href="#" className="text-[#b2b2b2] text-xs trans-04 pr-4 hover:text-primary">
                EN
              </a>
              <a href="#" className="text-[#b2b2b2] text-xs trans-04 hover:text-primary">
                USD
              </a>
            </div>
          </li>
        </ul>

        {/* Navigation Links */}
        <ul className="py-4">
          {navLinks.map((link) => (
            <li key={link.path} className="border-b border-[#e6e6e6]">
              <Link
                to={link.path}
                onClick={closeMobileMenu}
                className={`block px-5 py-3 text-sm ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-[#333] hover:text-primary'
                } ${link.isHot ? 'label1 relative' : ''}`}
                data-label1={link.isHot ? 'hot' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
