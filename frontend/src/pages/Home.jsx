import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const scrollToFooter = () => {
    const footer = document.getElementById("homepage-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStart = () => {
    navigate("/register");
  };

  return (
    <div className="homepage">
      <header className="homepage-navbar">
        <div className="homepage-brand">
          <div className="red-circle"></div>
          <span className="brand-name">SkillUp Tracker</span>
        </div>
        <nav className="homepage-nav-links">
          <button onClick={() => navigate("/login")} className="modern-nav-btn">Log In</button>
          <button onClick={scrollToFooter} className="modern-nav-btn">Contact →</button>
        </nav>
      </header>

      <main className="homepage-hero">
        <div className="hero-content fade-in">
          <h1 className="animated-title centered-text">Level up your skills. One step at a time.</h1>
        </div>

        <div className="hero-image-container fade-in">
          <img src="/assets/heroImage.jpg" alt="Skill development visual" className="hero-image blurred" />
          <div className="hero-image-overlay centered-overlay">
            <h2>Capture your progress</h2>
            <p>Stay focused. Stay improving.</p>
          </div>
        </div>
        <div className="hero-content fade-in"></div>
          <div className="spacer" />
            <button className="start-btn centered-btn" onClick={handleStart}>
              Start Now →
            </button>
      </main>

        <footer className="homepage-footer" id="homepage-footer">
          <div className="footer-columns">
            {/* Columna 1 */}
            <div className="footer-column align-start">
              <h3 className="footer-subtitle">CONTACT US</h3>
              <p className="footer-text">Contact email</p>
              <div className="footer-links-block">
                <div className="footer-icon-row"><strong>GITHUB</strong><img src="/assets/github-icon.png" alt="GitHub" className="footer-icon" /></div>
                <div className="footer-icon-row"><strong>JOIN OUR DISCORD</strong><img src="/assets/discord-icon.png" alt="Discord" className="footer-icon" /></div>
              </div>
              <div className="footer-labels">
              </div>
            </div>

            {/* Columna 2 */}
            <div className="footer-column align-start border-left">
              <h3 className="footer-subtitle">#HASHTAG</h3>
              <div className="footer-links-block">
                <div className="footer-icon-row"><strong>LINKEDIN</strong><img src="/assets/linkedin-icon.png" alt="LinkedIn" className="footer-icon" /></div>
                <div className="footer-icon-row"><strong>INSTAGRAM</strong><img src="/assets/instagram-icon.png" alt="Instagram" className="footer-icon" /></div>
              </div>
              <div className="footer-labels">
              </div>
            </div>

            {/* Columna 3 */}
            <div className="footer-column align-end border-left footer-bottom-right">
              <p className="footer-credits">Developed by Fernando González</p>
              <p>
                GitHub: <a href="https://github.com/fdevg04" target="_blank">@fdevg04</a>
              </p>
              <p className="copyright">© SkillUp Tracker 2025</p>
            </div>
          </div>
        </footer>

    </div>
  );
}

export default Home;
