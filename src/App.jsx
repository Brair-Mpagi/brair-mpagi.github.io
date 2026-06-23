import { useState } from 'react';
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
import CVModal from './components/CVModal';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const openCVModal = () => setIsCVModalOpen(true);
  const closeCVModal = () => setIsCVModalOpen(false);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} openCVModal={openCVModal} />
      <main>
        <Hero openCVModal={openCVModal} />
        <Stats />
        <NeuralNetworkGraph />
        <About openCVModal={openCVModal} />
        <div className="gradient-divider"></div>
        <Skills />
        <div className="gradient-divider"></div>
        <Experience openCVModal={openCVModal} />
        <div className="gradient-divider"></div>
        <Projects />
        <div className="gradient-divider"></div>
        <Research />
        <div className="gradient-divider"></div>
        <Contact />
      </main>
      <Footer openCVModal={openCVModal} />
      <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </>
  );
}

export default App;
