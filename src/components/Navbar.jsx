/*
  ============================================
  📄 Navbar.jsx — Minimal Text Navigation
  ============================================

  Inspired by yuvich.com's clean top nav:
  just simple text links — Index / About / Work / Now
  
  No flashy logos, no icons — pure minimalism.

  🔑 KEY CONCEPT: useState (React Hook)
  ──────────────────────────────────────
  Hooks are special functions that let components "remember" data.
  
  useState gives you:
  - A value (the current state)
  - A function to change that value
  
  When the value changes, React automatically re-renders 
  (redraws) the component. This is how React stays "reactive"!
*/

import { useState } from 'react';

function Navbar() {
  // Track whether mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/*
        The nav has a simple layout:
        - Left side: your name/brand
        - Right side: navigation links
      */}
      <a href="#index" className="nav-brand">
        Portfolio
      </a>

      {/* Hamburger button — only visible on mobile (hidden via CSS on desktop) */}
      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        {/*
          Each link is an anchor (#) that scrolls to a section.
          onClick closes the mobile menu after clicking.
        */}
        <a href="#index" onClick={() => setIsOpen(false)}>Index</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
        <a href="#now" onClick={() => setIsOpen(false)}>Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
