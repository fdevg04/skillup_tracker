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
          <h1 className="animated-title centered-text">Empower your growth. Track your progress.</h1>
        </div>

        <div className="hero-image-container fade-in">
          <img src="/assets/heroImage.jpg" alt="Skill development visual" className="hero-image blurred" />
          <div className="hero-image-overlay centered-overlay">
            <h2>Document your learnings</h2>
            <p>Unlock your potential with SkillUp Tracker.</p>
          </div>
        </div>
        <div className="hero-content fade-in"></div>
          <div className="spacer" />
            <button className="start-btn centered-btn" onClick={handleStart}>
              Start Now →
            </button>
      </main>

      <footer className="homepage-footer" id="homepage-footer">
        <div className="footer-content">
          <h3 className="footer-title">SkillUp Tracker</h3>
          <p>Email: <a href="mailto:contact@skilluptracker.com">contact@skilluptracker.com</a></p>
          <p className="footer-links">
            <a href="#">Instagram</a> | <a href="#">LinkedIn</a> | <a href="#">GitHub</a>
          </p>
          <p className="copyright">© 2025 SkillUp Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
