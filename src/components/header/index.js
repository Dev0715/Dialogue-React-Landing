import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <img src="/images/logo.png" alt="logo" />
          <p className="logo-text">Dialogue</p>
        </div>
        <div className="splitter-vertical"></div>
        <ul className="header-menu">
          <li className="header-menu-item">About</li>
          <li className="header-menu-item">Documentation</li>
          <li className="header-menu-item header-menu-cta">Get started</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
