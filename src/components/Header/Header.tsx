import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      slug: "react-dom",
      title: "React DOM",
    },
    {
      slug: "native-hooks",
      title: "Native Hooks",
    },
    {
      slug: "custom-hooks",
      title: "Custom Hooks",
    },
    {
      slug: "game-time",
      title: "Game Time",
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

  useEffect(() => {
    // Section highlighting functionality
    const sections = document.querySelectorAll("section");
    const desktopNavItems = document.querySelectorAll("header nav div a");
    const mobileNavItems = document.querySelectorAll(".mobile-nav-link");

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          [...desktopNavItems, ...mobileNavItems].forEach((item) => {
            const element = item as HTMLElement;
            if (element.getAttribute("aria-label") === entry.target.id) {
              element.classList.add("active");
            } else {
              element.classList.remove("active");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <header className="header">
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <div className="nav-container">
          {navItems.map((link) => (
            <a
              key={link.slug}
              className="nav-link"
              aria-label={link.title}
              href={`#${link.slug}`}
            >
              {link.title}
            </a>
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
            <a
              key={link.slug}
              className="mobile-nav-link"
              aria-label={link.title}
              href={`#${link.slug}`}
              onClick={handleNavLinkClick}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

