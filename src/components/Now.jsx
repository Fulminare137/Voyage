/*
  ============================================
  📄 Now.jsx — The "Now" Page Section
  ============================================

  Updated to reflect:
  - Astrophysics focus
  - 12th grade life
  - Feynman quote REMOVED here (moved to Physics section)
  - A good Feynman quote is now in Physics.jsx
*/

function Now() {
  const currentlyDoing = [
    {
      emoji: '🔭',
      title: 'Obsessing Over',
      description: 'Black hole thermodynamics and the information paradox. How does Hawking radiation carry information? Genuinely keeps me up at night.',
    },
    {
      emoji: '📐',
      title: 'Studying',
      description: 'Multivariable calculus and linear algebra — the grammar of physics. Equations as a language; slowly becoming fluent.',
    },
    {
      emoji: '🌍',
      title: 'Learning',
      description: 'German. Weil die Sprache der Philosophie und der Wissenschaft Deutsch ist. (Because the language of philosophy and science is German.)',
    },
    {
      emoji: '🖥️',
      title: 'Building',
      description: 'This website, obviously. Also exploring how to visualize physics interactively — turning equations into something you can touch.',
    },
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="now" className="now section">
      <div className="container">
        <h2 className="section-label">Now</h2>
        <p className="section-description">
          What I'm currently focused on.
          <span className="now-updated">Last updated: {lastUpdated}</span>
        </p>

        <div className="now-grid">
          {currentlyDoing.map((item, index) => (
            <div key={index} className="now-card">
              <div className="now-card-header">
                <span className="now-emoji">{item.emoji}</span>
                <h3 className="now-title">{item.title}</h3>
              </div>
              <p className="now-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Now;
