/*
  ============================================
  📄 About.jsx — Über mich Section
  ============================================
  - German prose text from user
  - Details: Location India, Sprachen, Ziel Ausbildung 2027
  - Languages: En C1 + De B2/C1 with scientific German quotes
  - Technologies: updated to match requested skills
*/

function About() {
  const details = [
    { label: 'Standort', value: 'Indien' },
    { label: 'Sprachen', value: 'Deutsch B2 / Englisch C1' },
    { label: 'Ziel', value: 'Ausbildung in Deutschland ab 2027' },
    { label: 'Interessen', value: 'Astrophysik, Mathematik, Software, Linux' },
  ];

  /*
    LANGUAGES
    ──────────
    English: keep as-is (user confirmed it's perfect).
    German: scientific quotes in German — no translations.
  */
  const languages = [
    {
      lang: 'English',
      level: 'C1',
      note: 'Native fluency in sarcasm included.',
    },
    {
      lang: 'Deutsch',
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
    'Linux', 'JavaScript', 'React', 'Webhosting',
    'Computernetzwerke', 'Betriebssysteme', 'IT-Fehlersuche',
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-label">Über mich</h2>

        <div className="about-grid">
          {/* LEFT COLUMN: German prose */}
          <div className="about-text">
            <p className="about-large">
              Ich komme aus Indien und interessiere mich für Software, Linux und Astrophysik.
            </p>
            <p>
              Ich probiere neue Technologien am liebsten selbst aus und bleibe bei Fehlern
              dran, bis die Lösung funktioniert.
            </p>
            <p>
              Ab August 2027 möchte ich eine Ausbildung in Deutschland im Bereich
              Softwareentwicklung beginnen. Deutsch (B2) und Englisch (C1) sind meine
              Arbeitssprachen.
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
              <h3 className="tech-title">Sprachen</h3>
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
              <h3 className="tech-title">Technologien</h3>
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
