/*
  ============================================
  📄 About.jsx — About Me Section
  ============================================
  - No 12th grade mention, neutral phrasing
  - "Next" detail row removed
  - German entries: scientific quotes only, no translations
  - English entry unchanged
*/

function About() {
  const details = [
    { label: 'Location', value: 'India' },
    { label: 'Currently', value: 'Studying. Thinking. Occasionally both.' },
    { label: 'Interests', value: 'Astrophysics, Mathematics, Languages' },
  ];

  /*
    LANGUAGES
    ──────────
    English: keep as-is (user confirmed it's perfect).
    German: scientific quotes in German — no translations.
    These are real statements by real scientists, written in German.
  */
  const languages = [
    {
      lang: 'English',
      level: 'C1',
      note: 'Native fluency in sarcasm included.',
    },
    {
      lang: 'German',
      level: 'B2/C1',
      note: '"Gott würfelt nicht." — Albert Einstein',
    },
    {
      lang: '',
      level: '',
      note: '"Die Natur macht keine Sprünge." — Gottfried Wilhelm Leibniz',
    },
    {
      lang: '',
      level: '',
      note: '"Wir müssen wissen. Wir werden wissen." — David Hilbert',
    },
  ];

  const technologies = [
    'JavaScript', 'React', 'Python', 'HTML/CSS',
    'Git', 'Vite', 'LaTeX', 'C++',
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-label">About</h2>

        <div className="about-grid">
          {/* LEFT COLUMN: Text */}
          <div className="about-text">
            <p className="about-large">
              I'm Ramakrushna — someone who fell in love with the universe
              and never quite recovered.
            </p>
            <p>
              Astrophysics isn't just something I study — it's how I make
              sense of the world. The fact that the same mathematics that
              describes a falling apple also governs the collapse of stars
              is, frankly, unreasonably beautiful.
            </p>
            <p>
              I appreciate mathematics not just as a tool, but as an art
              form. A well-crafted proof gives me the same feeling as a
              perfect sentence — elegant, inevitable, surprising.
            </p>
            <p>
              Currently figuring out which university will tolerate someone
              who reads quantum mechanics for fun and complains about it
              in three languages.
            </p>
          </div>

          {/* RIGHT COLUMN: Details + Languages + Technologies */}
          <div className="about-details">
            <div className="details-list">
              {details.map((item, index) => (
                <div key={index} className="detail-row">
                  <span className="detail-label">{item.label}</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              ))}
            </div>

            {/* LANGUAGES SECTION */}
            <div className="tech-section">
              <h3 className="tech-title">Languages</h3>
              <div className="languages-list">
                {languages.map((item, index) => (
                  <div key={index} className="language-entry">
                    {item.lang && (
                      <div className="language-header">
                        <span className="language-name">{item.lang}</span>
                        <span className="language-level">{item.level}</span>
                      </div>
                    )}
                    <p className="language-note">{item.note}</p>
                  </div>
                ))}
              </div>
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
