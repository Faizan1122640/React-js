import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar ${isSticky ? 'menu-bg' : ''}`}>
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="https://preview.uideck.com/items/slick/business/img/logo.png" alt="Slick Logo" />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarCollapse" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <i className="lni lni-menu"></i>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services" onClick={(e) => handleLinkClick(e, 'services')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features" onClick={(e) => handleLinkClick(e, 'features')}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#showcase" onClick={(e) => handleLinkClick(e, 'showcase')}>Showcase</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')}>Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#team" onClick={(e) => handleLinkClick(e, 'team')}>Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#blog" onClick={(e) => handleLinkClick(e, 'blog')}>Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-singin" href="#download">Download</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
