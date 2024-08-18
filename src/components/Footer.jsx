import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Drawing Artist. All rights reserved.</p>
        <ul>
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
