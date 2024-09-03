import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css"; // Make sure this path is correct according to your project structure

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">DoodleDelight</h1>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={isOpen ? "line line1 open" : "line line1"}></div>
        <div className={isOpen ? "line line2 open" : "line line2"}></div>
        <div className={isOpen ? "line line3 open" : "line line3"}></div>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={toggleMenu}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={toggleMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={toggleMenu}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
