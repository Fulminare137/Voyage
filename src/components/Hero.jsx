/*
  ============================================
  📄 Hero.jsx — The Landing/Index Section
  ============================================

  Full-viewport hero with:
  - Starfield canvas background
  - Real name (Ramakrushna Hota)
  - No designation — just the name, big and bold
  - Bio reflecting astrophysics + math passion
  - Physics/math easter egg formulas scattered decoratively

  🔑 KEY CONCEPTS: useEffect + useRef + Canvas API
*/

import { useEffect, useRef } from 'react';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // More stars — we love the cosmos
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.6 + 0.3,
      speed: Math.random() * 0.25 + 0.03,
      opacity: Math.random() * 0.9 + 0.1,
    }));

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y -= star.speed;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        const twinkle = star.opacity + (Math.random() - 0.5) * 0.08;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, Math.min(1, twinkle))})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="index" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        {/* Just the name — no title/designation */}
        <h1 className="hero-name">
          Ramakrushna Hota
        </h1>

        <p className="hero-bio">
          Staring at the universe and wondering why it bothers to be
          so unreasonably mathematical.
          <br />
          Astrophysics enthusiast. Occasional poet of equations.
        </p>

        <div className="hero-links">
          <a href="https://github.com/Fulminare137" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="link-separator">/</span>
          <a href="mailto:you@email.com">
            Email
          </a>
        </div>

        {/*
          PHYSICS & MATH EASTER EGGS
          ────────────────────────────
          Formulas with deep personal meaning:
          - Schrödinger equation (quantum mechanics)
          - Einstein field equations (spacetime curvature = reality)
          - Euler's identity (the most beautiful equation ever written)
          - Feynman path integral (sum over all histories)
          - Schwarzschild radius (what makes a black hole)
        */}
        <div className="math-decorations">
          <span className="math-formula math-1">iℏ ∂ψ/∂t = Ĥψ</span>
          <span className="math-formula math-2">Gμν + Λgμν = 8πG/c⁴ Tμν</span>
          <span className="math-formula math-3">e^(iπ) + 1 = 0</span>
          <span className="math-formula math-4">rs = 2GM/c²</span>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
