import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useWishlistStore from '../../store/wishlistStore';
import useUIStore from '../../store/uiStore';
import useThemeStore from '../../store/themeStore';
import useAuthStore from '../../store/authStore';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.getItemCount());
  const { openCart, openSearch } = useUIStore();
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/cart', label: 'Features', isHot: true },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header>
      {/* Header desktop */}
      <div className={`container-menu-desktop ${isScrolled ? 'fix-menu-desktop' : ''}`}>
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>

            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help & FAQs
              </a>
              {user ? (
                <>
                  <span className="flex-c-m trans-04 p-lr-25">
                    Hi, {user.name}
                  </span>
                  <a
                    href="#"
                    className="flex-c-m trans-04 p-lr-25"
                    onClick={(e) => { e.preventDefault(); handleLogout(); }}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex-c-m trans-04 p-lr-25">
                    Login
                  </Link>
                  <Link to="/signup" className="flex-c-m trans-04 p-lr-25">
                    Sign Up
                  </Link>
                </>
              )}
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>

        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <Link to="/" className="logo">
              <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
            </Link>

            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                {navLinks.map((link) => (
                  <li
                    key={link.path}
                    className={location.pathname === link.path ? 'active-menu' : ''}
                  >
                    <Link
                      to={link.path}
                      className={link.isHot ? 'label1' : ''}
                      data-label1={link.isHot ? 'hot' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search"
                onClick={openSearch}
                style={{ cursor: 'pointer' }}
              >
                <i className="zmdi zmdi-search"></i>
              </div>

              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                data-notify={cartCount}
                onClick={openCart}
                style={{ cursor: 'pointer' }}
              >
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>

              <Link
                to="/wishlist"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify={wishlistCount}
              >
                <i className="zmdi zmdi-favorite-outline"></i>
              </Link>

              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11"
                onClick={toggleTheme}
                style={{ cursor: 'pointer' }}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <i className={`zmdi ${isDarkMode ? 'zmdi-sun' : 'zmdi-brightness-2'}`}></i>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo mobile */}
        <div className="logo-mobile">
          <Link to="/"><img src="/images/icons/logo-01.png" alt="IMG-LOGO" /></Link>
        </div>

        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search"
            onClick={openSearch}
            style={{ cursor: 'pointer' }}
          >
            <i className="zmdi zmdi-search"></i>
          </div>

          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify={cartCount}
            onClick={openCart}
            style={{ cursor: 'pointer' }}
          >
            <i className="zmdi zmdi-shopping-cart"></i>
          </div>

          <Link
            to="/wishlist"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            data-notify={wishlistCount}
          >
            <i className="zmdi zmdi-favorite-outline"></i>
          </Link>

          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10"
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={`zmdi ${isDarkMode ? 'zmdi-sun' : 'zmdi-brightness-2'}`}></i>
          </div>
        </div>

        {/* Button show menu */}
        <div
          className={`btn-show-menu-mobile hamburger hamburger--squeeze ${isMobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`menu-mobile ${isMobileMenuOpen ? 'show-menu-mobile' : ''}`}>
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>
          </li>
          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m p-lr-10 trans-04">Help & FAQs</a>
              {user ? (
                <>
                  <span className="flex-c-m p-lr-10 trans-04">Hi, {user.name}</span>
                  <a
                    href="#"
                    className="flex-c-m p-lr-10 trans-04"
                    onClick={(e) => { e.preventDefault(); handleLogout(); setIsMobileMenuOpen(false); }}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex-c-m p-lr-10 trans-04" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="flex-c-m p-lr-10 trans-04" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                </>
              )}
              <a href="#" className="flex-c-m p-lr-10 trans-04">EN</a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">USD</a>
            </div>
          </li>
        </ul>

        <ul className="main-menu-m">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={link.isHot ? 'label1 rs1' : ''}
                data-label1={link.isHot ? 'hot' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
