/*
  ============================================
  📄 Projects.jsx — Projekte Section
  ============================================
  Three project cards with German descriptions.
  Card 4 (Computer und Netzwerke) is left as a
  TODO — add a real example sentence to enable it.
*/

const projects = [
  {
    title: 'macOS-Emulation auf einem 17 Jahre alten Laptop',
    description:
      'Ich wollte verstehen, wie das System aufgebaut ist, und habe es auf alter Hardware zum Laufen gebracht.',
    tags: ['Virtualisierung', 'Betriebssysteme'],
  },
  {
    title: 'Linux-Distributionen und Hosting',
    description:
      'Ich habe Arch- und Debian-basierte Systeme sowie Linux Mint installiert, konfiguriert und getestet und mich mit Hosting beschäftigt.',
    tags: ['Linux', 'Konfiguration', 'Fehlersuche'],
  },
  {
    title: 'Diese Portfolio-Website (in Arbeit)',
    description:
      'Gebaut mit JavaScript und React, damit ich meine Projekte zeigen kann.',
    tags: ['Webentwicklung', 'JavaScript', 'React'],
  },
  /*
    TODO: Add a real one-line example for this card, e.g.:
    "Ich habe einen Heimrouter repariert, der keine IP-Adressen vergeben konnte,
     indem ich die DHCP-Konfiguration zurückgesetzt habe."
    Then uncomment this block.

  {
    title: 'Computer und Netzwerke einrichten und reparieren',
    description: '...',
    tags: ['Netzwerke', 'IT-Support', 'Fehlersuche'],
  },
  */
];

function Projects() {
  return (
    <section id="projekte" className="projects section">
      <div className="container">
        <h2 className="section-label">Projekte</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-meta">
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
