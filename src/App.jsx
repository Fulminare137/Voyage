/*
  ============================================
  📄 App.jsx — The Root Component
  ============================================
  Assembles all sections.
*/

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Physics from './components/Physics.jsx';
import Now from './components/Now.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Physics />
        <Now />
      </main>
      <Footer />
    </div>
  );
}

export default App;
