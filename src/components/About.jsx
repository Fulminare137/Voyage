/*
  ============================================
  📄 About.jsx — About Me Section
  ============================================

  Updated with:
  - Real bio focused on astrophysics + math appreciation
  - 12th graduate going to study
  - Location + interests details (no "Focus" or "Education" as dry fields)
  - Languages section: German B2/C1, English C1 with quirky German one-liners
  - Technologies section kept
*/

function About() {
  /*
    Quick-look details in the right column.
    "Focus: Full Stack" removed. Education kept quirky.
  */
  const details = [
    { label: 'Location', value: 'India' },
    { label: 'Currently', value: 'Surviving 12th grade, barely' },
    { label: 'Next', value: 'University — somewhere with a good telescope' },
    { label: 'Interests', value: 'Astrophysics, Mathematics, Languages' },
  ];

  /*
    LANGUAGES — with each one's proficiency and a quirky German phrase.
    German one-liners that perfectly capture the energy.
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
      note: '"Ich lerne Deutsch, weil Englisch zu einfach ist." (I learn German because English is too easy.)',
    },
    {
      lang: '',
      level: '',
      note: '"Warum ist die Banane krumm? Weil niemand in den Wald biegt." (Why is a banana bent? Because nobody turns into the forest.) — Classic German logic.',
    },
    {
      lang: '',
      level: '',
      note: '"Ich spreche Deutsch wie Einstein Physik erklärt hat — meistens richtig, manchmal relativistisch." (I speak German like Einstein explained physics — mostly right, sometimes relativistic.)',
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
              I'm Ramakrushna — a 12th graduate who fell in love with
              the universe and never quite recovered.
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
