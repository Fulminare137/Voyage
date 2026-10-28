/*
  ============================================
  📄 Now.jsx — The "Now" Page Section
  ============================================

  Inspired by the "Now" page on yuvich.com — a snapshot of
  what you're currently doing, learning, or building.

  This is different from a resume (which is about the past).
  A "Now" section answers: "What are you focused on RIGHT NOW?"

  🔑 KEY CONCEPT: CONDITIONAL RENDERING
  ──────────────────────────────────────
  In React, you can show/hide elements based on conditions:

  Method 1: Ternary operator
    {isLoggedIn ? <Dashboard /> : <LoginForm />}

  Method 2: Logical AND (&&)
    {hasNotification && <Badge />}
    (If hasNotification is true, show Badge. Otherwise, show nothing.)

  We use && below for the emoji bullet points.
*/

function Now() {
  /*
    Store your "now" items as data.
    Update these whenever your focus changes!
  */
  const currentlyDoing = [
    {
      emoji: '🔨',
      title: 'Building',
      description: 'Learning React by building this portfolio website from scratch.',
    },
    {
      emoji: '📚',
      title: 'Reading',
      description: '"The Pragmatic Programmer" — a classic book on software craft.',
    },
    {
      emoji: '🌱',
      title: 'Learning',
      description: 'Diving deeper into JavaScript, exploring TypeScript and Node.js.',
    },
    {
      emoji: '🎯',
      title: 'Goals',
      description: 'Ship 3 projects by end of year. Contribute to open source.',
    },
  ];

  // Get today's date, formatted nicely
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

        {/* Inspirational quote — adds a personal touch */}
        <blockquote className="now-quote">
          "The best time to plant a tree was 20 years ago.
          The second best time is now."
        </blockquote>
      </div>
    </section>
  );
}

export default Now;
