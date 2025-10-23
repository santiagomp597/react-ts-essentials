import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      slug: "typescript",
      title: "TypeScript",
      path: "/typescript",
    },
    {
      slug: "react",
      title: "React",
      path: "/react",
    },
  ];

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleNavLinkClick = () => {
    setTimeout(closeMobileMenu, 100);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="header">
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <div className="nav-container">
          {navItems.map((link) => (
            <Link
              key={link.slug}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              aria-label={link.title}
              to={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav-container">
        {/* Hamburger Menu Button */}
        <button
          data-testid="mobile-menu-button"
          className="hamburger-button"
          aria-label="Toggle mobile menu"
          onClick={openMobileMenu}
        >
          <div className="hamburger-icon">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? "overlay-visible" : "overlay-hidden"}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`mobile-sidebar ${isMobileMenuOpen ? "sidebar-open" : "sidebar-closed"}`}
      >
        {/* Menu Header */}
        <div className="mobile-header">
          <h2 className="mobile-title">Menu</h2>
          <button
            className="close-button"
            aria-label="Close mobile menu"
            onClick={closeMobileMenu}
          >
            <svg
              className="close-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mobile-nav">
          {navItems.map((link) => (
            <Link
              key={link.slug}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              aria-label={link.title}
              to={link.path}
              onClick={handleNavLinkClick}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

