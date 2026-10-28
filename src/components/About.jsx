/*
  ============================================
  📄 About.jsx — About Me Section
  ============================================

  A clean, editorial-style about section.
  Split into two columns on desktop:
  - Left: descriptive text
  - Right: quick facts / details

  🔑 KEY CONCEPT: ARRAYS + .map()
  ─────────────────────────────────
  Instead of writing repetitive JSX, we store data in arrays
  and use .map() to loop through them and generate JSX.

  This is a HUGE pattern in React:
  DATA (array) → .map() → JSX (list of elements)
*/

function About() {
  /*
    Store your details as data. This makes it easy to update —
    just change the array, and the UI updates automatically!
  */
  const details = [
    { label: 'Location', value: 'Your City, Country' },
    { label: 'Education', value: 'Computer Science' },
    { label: 'Focus', value: 'Full-Stack Development' },
    { label: 'Interests', value: 'Physics, Mathematics, Music' },
  ];

  const technologies = [
    'JavaScript', 'React', 'Node.js', 'Python',
    'HTML/CSS', 'Git', 'SQL', 'TypeScript'
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-label">About</h2>

        <div className="about-grid">
          {/* LEFT COLUMN: Text */}
          <div className="about-text">
            <p className="about-large">
              I'm a developer passionate about building things that live
              on the internet. I care deeply about clean code, thoughtful
              design, and creating software that makes a difference.
            </p>
            <p>
              My journey into programming started with curiosity — wondering
              how the websites I visited every day actually worked. That
              curiosity turned into a passion, and now I spend my days
              turning ideas into real, working applications.
            </p>
            <p>
              I believe in learning by building. Every project teaches me
              something new, and I'm always looking for the next challenge
              that pushes me out of my comfort zone.
            </p>
          </div>

          {/* RIGHT COLUMN: Quick facts + Technologies */}
          <div className="about-details">
            <div className="details-list">
              {/*
                .map() explained:
                ──────────────────
                details.map((item, index) => ...)
                
                This loops through each item in the "details" array
                and returns a piece of JSX for each one.
                
                "key" is required by React when rendering lists —
                it helps React track which items changed, were added,
                or removed. Always use a unique identifier as the key.
              */}
              {details.map((item, index) => (
                <div key={index} className="detail-row">
                  <span className="detail-label">{item.label}</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="tech-section">
              <h3 className="tech-title">Technologies</h3>
              <div className="tech-grid">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
