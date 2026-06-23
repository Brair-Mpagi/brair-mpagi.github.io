import './Footer.css';

export default function Footer({ openCVModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-icon">⟨</span>
              <span className="footer__logo-text">Brair</span>
              <span className="footer__logo-dot">.</span>
              <span className="footer__logo-text">Mpagi</span>
              <span className="footer__logo-icon">⟩</span>
            </span>
            <p className="footer__tagline">
              Building intelligent systems from Uganda, for the world.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title">Navigation</h4>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
              <button onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}>Research</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </div>
            <div className="footer__link-group">
              <h4 className="footer__link-title">Connect</h4>
              <a href="https://github.com/Brair-Mpagi" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:mpagiderrick@gmail.com">Email</a>
              <button onClick={openCVModal}>Resume</button>
            </div>
          </div>
        </div>
        <div className="gradient-divider"></div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Mpagi Derrick Brair. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
