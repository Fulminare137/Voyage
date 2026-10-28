/*
  ============================================
  📄 Work.jsx — Projects / Work Section
  ============================================

  Showcases your projects in a clean list format,
  similar to yuvich.com's work section.

  Each project is a card with:
  - Title
  - Description
  - Tech tags
  - Links (demo / source code)

  🔑 KEY CONCEPT: PROPS
  ──────────────────────
  Props are how you pass data FROM a parent component
  TO a child component. Think of them as function arguments.

  Parent:  <ProjectCard title="My App" />
  Child:   function ProjectCard({ title }) { ... }
           // title === "My App"

  We'll use a sub-component (ProjectCard) to keep things clean.
*/

/*
  PROJECT DATA
  ────────────
  All your projects in one place. To add a new project,
  just add a new object to this array!
  
  Keeping data separate from the UI is a best practice —
  it makes your code easier to maintain.
*/
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A minimalist, dark-themed personal portfolio built with React and Vite. Features an interactive starfield canvas, mathematical easter eggs, and a live Voyager 1 distance tracker.',
    tech: ['React', 'CSS', 'Canvas API', 'Vite'],
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager App',
    description:
      'A full-stack task management application with user authentication, drag-and-drop task boards, and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A clean weather app that fetches real-time data from the OpenWeather API. Features location search, 5-day forecasts, and dynamic backgrounds.',
    tech: ['JavaScript', 'REST API', 'CSS'],
    github: 'https://github.com',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Markdown Editor',
    description:
      'A real-time markdown editor with live preview, syntax highlighting, and export to PDF functionality.',
    tech: ['React', 'Marked.js', 'CSS'],
    github: 'https://github.com',
    live: '#',
    featured: false,
  },
];

/*
  ProjectCard — A Child Component
  ────────────────────────────────
  This is a smaller component used INSIDE the Work component.
  It receives a "project" object as a prop and displays it.

  We DESTRUCTURE the props: ({ project }) pulls out the
  "project" property from the props object.
  
  Destructuring is just a shorthand:
    ({ project }) is the same as (props) then using props.project
*/
function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-header">
        {/* Project number for visual flair */}
        <span className="project-number">
          {String(project.id).padStart(2, '0')}
        </span>
        {project.featured && <span className="featured-badge">Featured</span>}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="project-tech-tag">{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Source ↗
        </a>
        {project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}

/*
  Work — The Parent Component
  ────────────────────────────
  Maps through the projects array and renders a
  <ProjectCard /> for each one.
*/
function Work() {
  return (
    <section id="work" className="work section">
      <div className="container">
        <h2 className="section-label">Work</h2>
        <p className="section-description">
          A selection of projects I've built. Each one taught me something new.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            /*
              "key" tells React how to identify each item in a list.
              Without it, React can't efficiently update the list
              when items are added, removed, or reordered.
              Always use a unique value (like an id) as the key.
            */
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
