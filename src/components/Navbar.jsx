/*
  ============================================
  📄 Navbar.jsx — Minimal Text Navigation
  ============================================
  Navigation updated to match new sections.
  Work removed, Physics added.
*/

import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#index" className="nav-brand">
        Fulminare
      </a>

      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#index" onClick={() => setIsOpen(false)}>Index</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#physics" onClick={() => setIsOpen(false)}>Physics</a>
        <a href="#now" onClick={() => setIsOpen(false)}>Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
