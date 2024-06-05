import "./styles.css";

const LandingHero = () => {
  return (
    <div className="landing-hero">
      <div className="hero-background-wrapper">
        <img
          src="/images/hero-background.png"
          alt="hero-background"
          className="hero-background"
        />
        <div className="gradient-layer"></div>
        <div className="gradient-layer"></div>
      </div>
      <div className="hero-content-wrapper">
        <p className="hero-title">
          A new standard for academic and creative expression
        </p>
        <p className="hero-description">
          Document the breadth and depth of your work with AI. Get your ideas
          across better, and faster.
        </p>
        <div className="hero-cta-wrapper">
          <button className="hero-cta">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
