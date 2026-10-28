/*
  ============================================
  📄 Footer.jsx — Footer with Voyager 1 Tracker
  ============================================

  The footer includes:
  - Quick links
  - A live Voyager 1 distance tracker (inspired by yuvich.com!)
  - Copyright

  🔑 KEY CONCEPT: useEffect with INTERVALS
  ──────────────────────────────────────────
  We use setInterval to update the Voyager distance every second.
  
  setInterval(callback, milliseconds) runs a function repeatedly
  at the specified interval. 1000ms = 1 second.
  
  IMPORTANT: Always clean up intervals in the useEffect return!
  Otherwise they keep running even after the component is removed,
  causing memory leaks.
  
  🔑 KEY CONCEPT: REAL-WORLD DATA
  ────────────────────────────────
  Voyager 1 is the farthest human-made object from Earth.
  Launched in 1977, it's now over 24 billion km away and
  traveling at ~17 km/s. We calculate its live distance
  based on a known reference point + elapsed time × speed.
*/

import { useState, useEffect } from 'react';

function Footer() {
  const [voyagerDistance, setVoyagerDistance] = useState('');

  useEffect(() => {
    /*
      VOYAGER 1 DISTANCE CALCULATION
      ──────────────────────────────
      - Reference: On Jan 1, 2024, Voyager 1 was ~24.14 billion km from Earth
      - Speed: ~17.0 km/s (it's gradually slowing but we use a constant)
      - We calculate: reference + (seconds elapsed since reference) × speed
    */
    const referenceDate = new Date('2024-01-01T00:00:00Z');
    const referenceDistanceKm = 24_140_000_000; // 24.14 billion km
    const speedKmPerSecond = 17.0;

    const updateDistance = () => {
      const now = new Date();
      const elapsedSeconds = (now - referenceDate) / 1000; // milliseconds → seconds
      const currentDistance = referenceDistanceKm + elapsedSeconds * speedKmPerSecond;

      // Format with commas for readability: 24,140,000,000 → "24,140,000,000"
      setVoyagerDistance(Math.floor(currentDistance).toLocaleString());
    };

    updateDistance(); // Calculate immediately
    const interval = setInterval(updateDistance, 1000); // Then every second

    // Cleanup: stop the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {/* Voyager 1 tracker — the cool nerdy touch! */}
        <div className="voyager-tracker">
          <div className="voyager-label">
            <span className="voyager-dot"></span>
            Voyager 1 is currently
          </div>
          <div className="voyager-distance">
            {voyagerDistance} km
          </div>
          <div className="voyager-sublabel">from Earth and counting</div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:you@email.com">Email</a>
          </div>

          <p className="footer-copy">
            {/*
              new Date().getFullYear() dynamically gets the current year.
              No more manually updating "© 2024" every January!
            */}
            © {new Date().getFullYear()} — Built with React & curiosity
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
