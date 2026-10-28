/*
  ============================================
  📄 Hero.jsx — The Landing/Index Section
  ============================================

  This is the first thing visitors see. Inspired by yuvich.com:
  - Big, bold introduction
  - Interactive canvas background (starfield/particle animation)
  - Mathematical formulas scattered as decoration
  - Clean, minimal, lots of white space on dark background

  🔑 KEY CONCEPTS:
  ─────────────────
  1. useEffect — A hook that runs code AFTER the component renders.
     Perfect for setting up animations, timers, or fetching data.
  
  2. useRef — A hook that gives you a direct reference to a DOM element
     (like grabbing an HTML element by its collar). We need this to
     draw on the <canvas>.
  
  3. Canvas API — A built-in browser feature that lets you draw 
     graphics using JavaScript. It's like having a digital paintbrush.
*/

import { useEffect, useRef } from 'react';

function Hero() {
  /*
    useRef creates a "ref" — a persistent reference to a DOM element.
    We attach it to the <canvas> element below so we can draw on it.
    
    Think of it like putting a name tag on an HTML element so you
    can find it later in your JavaScript code.
  */
  const canvasRef = useRef(null);

  /*
    useEffect — Runs Side Effects
    ──────────────────────────────
    useEffect(callback, dependencies)
    
    - callback: the function to run
    - dependencies (the [] array): WHEN to run it
      - [] (empty array) = run ONCE after first render
      - [value] = run whenever "value" changes
      - no array = run after EVERY render (usually bad for performance)
    
    Here we use [] so the animation starts once and keeps running.
  */
  useEffect(() => {
    const canvas = canvasRef.current; // Get the actual canvas DOM element
    if (!canvas) return; // Safety check

    // Get the 2D drawing context — this is your "paintbrush"
    const ctx = canvas.getContext('2d');

    // Make canvas fill the entire hero section
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    /*
      CREATE THE STARS
      ────────────────
      We create an array of "star" objects, each with random
      position (x, y), size, and speed.
      
      Array.from({ length: 200 }) creates an array with 200 slots,
      then .map() fills each slot with a star object.
    */
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,    // Between 0.5 and 2 pixels
      speed: Math.random() * 0.3 + 0.05,  // How fast it drifts
      opacity: Math.random() * 0.8 + 0.2, // Transparency (0=invisible, 1=solid)
    }));

    /*
      THE ANIMATION LOOP
      ──────────────────
      This function runs ~60 times per second (60fps).
      Each frame, it:
      1. Clears the canvas
      2. Updates each star's position
      3. Draws each star
      4. Requests the next frame
      
      requestAnimationFrame is the browser's way of saying
      "call this function right before the next screen refresh."
    */
    let animationId;
    const animate = () => {
      // Clear the entire canvas (erase previous frame)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move the star upward slowly (subtract from y)
        star.y -= star.speed;

        // If star goes above the canvas, wrap it to the bottom
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        // Twinkle effect: slightly randomize opacity each frame
        const twinkle = star.opacity + (Math.random() - 0.5) * 0.1;

        // Draw the star as a tiny circle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, twinkle))})`;
        ctx.fill();
      });

      // Schedule the next frame
      animationId = requestAnimationFrame(animate);
    };

    animate(); // Start the animation!

    /*
      CLEANUP FUNCTION
      ────────────────
      When the component is removed from the page (unmounted),
      React calls this cleanup function. We stop the animation
      and remove the resize listener to prevent memory leaks.
      
      Always clean up after yourself!
    */
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // ← Empty array = run once on mount

  return (
    <section id="index" className="hero">
      {/* The canvas sits behind the text (positioned absolutely via CSS) */}
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        {/* Main introduction */}
        <p className="hero-label">Software Engineer</p>
        <h1 className="hero-name">
          Your Name
        </h1>
        <p className="hero-bio">
          Building things at the intersection of code and creativity.
          <br />
          Currently exploring systems programming, web technologies,
          <br />
          and the beauty of mathematics.
        </p>

        {/* Social links — styled as minimal text links */}
        <div className="hero-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="link-separator">/</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="link-separator">/</span>
          <a href="mailto:you@email.com">
            Email
          </a>
        </div>

        {/*
          MATHEMATICAL EASTER EGGS
          ────────────────────────
          Decorative formulas scattered around the hero,
          inspired by yuvich.com's scientific touches.
          These are purely visual — they add character!
        */}
        <div className="math-decorations">
          <span className="math-formula math-1">e^(iπ) + 1 = 0</span>
          <span className="math-formula math-2">∇ × E = −∂B/∂t</span>
          <span className="math-formula math-3">φ = (1+√5)/2</span>
          <span className="math-formula math-4">∫₀^∞ e^(−x²) dx = √π/2</span>
        </div>
      </div>

      {/* Scroll indicator at the bottom */}
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
