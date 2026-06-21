import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import NeuralNetworkGraph from './components/NeuralNetworkGraph';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <NeuralNetworkGraph />
        <About />
        <div className="gradient-divider"></div>
        <Skills />
        <div className="gradient-divider"></div>
        <Experience />
        <div className="gradient-divider"></div>
        <Projects />
        <div className="gradient-divider"></div>
        <Research />
        <div className="gradient-divider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
