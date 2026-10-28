/*
  ============================================
  📄 App.jsx — The Root Component
  ============================================

  This assembles all sections of the site.
  
  Notice how the structure mirrors yuvich.com:
  - Navbar (Index / About / Work / Now)
  - Hero with interactive canvas background
  - About section
  - Work/Projects section  
  - Now section (what you're currently up to)
  - Footer with the Voyager tracker
  
  🔑 KEY CONCEPT: COMPONENT COMPOSITION
  ──────────────────────────────────────
  Each <ComponentName /> below is a self-contained piece.
  You can rearrange them, remove them, or add new ones.
  That's the power of React — mix and match like Lego bricks.
*/

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Now from './components/Now.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Now />
      </main>
      <Footer />
    </div>
  );
}

export default App;
