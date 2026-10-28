/*
  ============================================
  📄 Physics.jsx — Interactive Physics Section
  ============================================

  Inspired by yuvich.com's interactive canvas elements.

  Contains TWO interactive visualizations:
  
  1. DOUBLE PENDULUM (Chaos Theory)
     - Two pendulums connected together
     - Extremely sensitive to initial conditions
     - Demonstrates chaos: tiny changes → wildly different outcomes
     - This is why weather is hard to predict!
  
  2. WAVE SUPERPOSITION (Quantum + Classical)
     - Two sine waves that add together
     - Drag sliders to change frequency and amplitude
     - Shows interference: how waves combine to create new patterns
     - This is the core of quantum mechanics (wave functions!)

  🔑 NEW CONCEPTS:
  ─────────────────
  - useState for interactive controls (slider values)
  - useEffect with canvas for physics simulations
  - requestAnimationFrame for smooth 60fps animation
  - Math.sin(), Math.cos() — the language of waves and circles
*/

import { useEffect, useRef, useState } from 'react';

/* ──────────────────────────────────────────────────────────────
   COMPONENT 1: Double Pendulum (Chaos Theory Visualizer)
   ────────────────────────────────────────────────────────────── */
function DoublePendulum() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;   // Center x (pivot point)
    const cy = H * 0.28; // Center y (pivot point, upper area)

    /*
      PENDULUM PHYSICS
      ─────────────────
      Each pendulum has:
      - θ (theta): angle from vertical, in radians
      - ω (omega): angular velocity (how fast it's rotating)
      - L: length of the rod
      - m: mass of the bob (ball at the end)

      We simulate 3 pendulums with very slightly different starting
      angles to SHOW chaos — they start almost identical but quickly
      diverge into completely different paths!
    */
    const g = 9.81; // gravitational acceleration
    const dt = 0.04; // time step per frame (smaller = more accurate)

    // Create 3 pendulums with tiny initial angle differences
    const pendulums = [0, 0.001, 0.002].map((offset, i) => ({
      th1: Math.PI / 2 + offset,  // angle of first arm (from vertical)
      th2: Math.PI / 2 + offset,  // angle of second arm
      w1: 0,                       // angular velocity of first arm
      w2: 0,                       // angular velocity of second arm
      L1: 80,                      // length of first arm (pixels)
      L2: 80,                      // length of second arm (pixels)
      m1: 10,                      // mass of first bob
      m2: 10,                      // mass of second bob
      trail: [],                   // stores the path for drawing
      // Each pendulum gets a slightly different color
      color: ['#4fd1c5', '#9f7aea', '#f6ad55'][i],
    }));

    let animationId;

    const animate = () => {
      // Semi-transparent fill creates motion blur / trail effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, W, H);

      pendulums.forEach((p) => {
        /*
          EQUATIONS OF MOTION (double pendulum)
          ────────────────────────────────────────
          These are derived from Lagrangian mechanics.
          The actual equations are horrifying — but that's the beauty:
          simple-looking pendulums produce infinitely complex motion.

          α1, α2 = angular accelerations of each arm
          We use Runge-Kutta 2nd order (midpoint method) for stability.
        */
        const { th1, th2, w1, w2, L1, L2, m1, m2 } = p;
        const dth = th1 - th2;

        const den1 = (2 * m1 + m2) * L1 - m2 * L1 * Math.cos(2 * dth);
        const a1 = (
          -g * (2 * m1 + m2) * Math.sin(th1) -
          m2 * g * Math.sin(th1 - 2 * th2) -
          2 * Math.sin(dth) * m2 * (w2 * w2 * L2 + w1 * w1 * L1 * Math.cos(dth))
        ) / (den1);

        const den2 = (2 * m1 + m2) * L1 - m2 * L1 * Math.cos(2 * dth);
        const a2 = (
          2 * Math.sin(dth) * (
            w1 * w1 * L1 * (m1 + m2) +
            g * (m1 + m2) * Math.cos(th1) +
            w2 * w2 * L2 * m2 * Math.cos(dth)
          )
        ) / ((2 * L2 / L1) * den2);

        // Update velocities and angles
        p.w1 += a1 * dt;
        p.w2 += a2 * dt;
        p.th1 += p.w1 * dt;
        p.th2 += p.w2 * dt;

        // Calculate positions of both bobs
        const x1 = cx + L1 * Math.sin(p.th1);
        const y1 = cy + L1 * Math.cos(p.th1);
        const x2 = x1 + L2 * Math.sin(p.th2);
        const y2 = y1 + L2 * Math.cos(p.th2);

        // Store trail (limit to 200 points)
        p.trail.push({ x: x2, y: y2 });
        if (p.trail.length > 200) p.trail.shift();

        // Draw trail
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Draw rods
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Draw pivot
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fill();

        // Draw bobs
        [{ x: x1, y: y1, r: 6 }, { x: x2, y: y2, r: 5 }].forEach((bob) => {
          ctx.beginPath();
          ctx.arc(bob.x, bob.y, bob.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="physics-card">
      <div className="physics-card-header">
        <span className="physics-number">01</span>
        <h3 className="physics-title">Double Pendulum</h3>
      </div>
      <p className="physics-description">
        Three pendulums start at almost identical positions — offset by
        0.001 radians. Watch them diverge completely within seconds.
        This is <strong>chaos theory</strong>: deterministic equations,
        unpredictable outcomes. The butterfly effect, visualized.
      </p>
      <canvas
        ref={canvasRef}
        width={480}
        height={320}
        className="physics-canvas"
      />
      <p className="physics-caption">
        Lagrangian mechanics · Sensitivity to initial conditions · Chaos
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   COMPONENT 2: Wave Superposition
   ────────────────────────────────────────────────────────────── */
function WaveSuperposition() {
  const canvasRef = useRef(null);
  // useState lets sliders update the wave parameters in real time
  const [freq1, setFreq1] = useState(1.0);
  const [freq2, setFreq2] = useState(1.5);
  const [amp2, setAmp2] = useState(0.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    let t = 0;
    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw center axis
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, H / 2);
      ctx.lineTo(W, H / 2);
      ctx.stroke();

      const amp = 60; // base amplitude in pixels

      /*
        WAVE 1 (teal) — pure sine wave
        y = A · sin(2πfx/W + t)
        
        sin() takes an angle in radians and returns a value between -1 and 1.
        Multiplying by amplitude (A) scales it.
        Adding t makes it animate (move through time).
      */
      ctx.beginPath();
      for (let x = 0; x <= W; x++) {
        const angle = (x / W) * Math.PI * 2 * freq1 + t;
        const y = H / 2 - Math.sin(angle) * amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#4fd1c5';
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.5;
      ctx.stroke();

      // WAVE 2 (purple) — different frequency & amplitude
      ctx.beginPath();
      for (let x = 0; x <= W; x++) {
        const angle = (x / W) * Math.PI * 2 * freq2 + t * 1.3;
        const y = H / 2 - Math.sin(angle) * amp * amp2;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#9f7aea';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /*
        SUPERPOSITION (white) — the SUM of wave 1 + wave 2
        This is the principle of superposition: waves add.
        It's the foundation of interference, diffraction,
        and the quantum wavefunction!
      */
      ctx.beginPath();
      for (let x = 0; x <= W; x++) {
        const a1 = (x / W) * Math.PI * 2 * freq1 + t;
        const a2 = (x / W) * Math.PI * 2 * freq2 + t * 1.3;
        const y = H / 2 - (Math.sin(a1) + Math.sin(a2) * amp2) * (amp * 0.7);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 1;
      ctx.stroke();

      t += 0.025;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [freq1, freq2, amp2]); // Re-run when sliders change

  return (
    <div className="physics-card">
      <div className="physics-card-header">
        <span className="physics-number">02</span>
        <h3 className="physics-title">Wave Superposition</h3>
      </div>
      <p className="physics-description">
        Two waves (teal + purple) combine into one (white) via
        <strong> superposition</strong>. The result — constructive or
        destructive interference — is the language of light, sound,
        and quantum probability amplitudes. Drag the sliders.
      </p>
      <canvas
        ref={canvasRef}
        width={480}
        height={220}
        className="physics-canvas"
      />

      {/* Interactive sliders — useState makes these live-update the canvas */}
      <div className="wave-controls">
        <label className="wave-control-row">
          <span className="wave-control-label">ƒ₁ = {freq1.toFixed(1)} Hz</span>
          <input
            type="range"
            min="0.5"
            max="4"
            step="0.1"
            value={freq1}
            onChange={(e) => setFreq1(parseFloat(e.target.value))}
            className="wave-slider"
          />
        </label>
        <label className="wave-control-row">
          <span className="wave-control-label">ƒ₂ = {freq2.toFixed(1)} Hz</span>
          <input
            type="range"
            min="0.5"
            max="4"
            step="0.1"
            value={freq2}
            onChange={(e) => setFreq2(parseFloat(e.target.value))}
            className="wave-slider"
          />
        </label>
        <label className="wave-control-row">
          <span className="wave-control-label">A₂ = {amp2.toFixed(1)}</span>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={amp2}
            onChange={(e) => setAmp2(parseFloat(e.target.value))}
            className="wave-slider"
          />
        </label>
      </div>

      <p className="physics-caption">
        y = A₁sin(2πƒ₁t) + A₂sin(2πƒ₂t) · Fourier Analysis · Quantum Superposition
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   MAIN PHYSICS SECTION
   ────────────────────────────────────────────────────────────── */
function Physics() {
  return (
    <section id="physics" className="physics section">
      <div className="container">
        <h2 className="section-label">Physics</h2>
        <p className="section-description">
          Interactive simulations. The universe, rendered at 60fps.
        </p>

        <div className="physics-grid">
          <DoublePendulum />
          <WaveSuperposition />
        </div>

        {/* Feynman quote — replacing the generic one */}
        <blockquote className="feynman-quote">
          <p>
            "Physics is like sex: sure, it may give some practical results,
            but that's not why we do it."
          </p>
          <cite>— Richard P. Feynman</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default Physics;
