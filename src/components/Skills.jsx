/*
  ============================================
  📄 Skills.jsx — Kenntnisse Section
  ============================================
  Two groups: Technik and Persönlich
*/

const skillGroups = [
  {
    label: 'Technik',
    skills: [
      'Linux',
      'JavaScript',
      'React',
      'Webhosting',
      'Computernetzwerke',
      'Betriebssysteme',
      'IT-Fehlersuche',
    ],
  },
  {
    label: 'Persönlich',
    skills: [
      'Analytisches Denken',
      'Problemlösung',
      'Selbstständiges Arbeiten',
      'Lernbereitschaft',
    ],
  },
];

function Skills() {
  return (
    <section id="kenntnisse" className="skills section">
      <div className="container">
        <h2 className="section-label">Kenntnisse</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group-label">{group.label}</h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
