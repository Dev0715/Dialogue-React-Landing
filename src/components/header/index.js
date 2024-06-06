import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <img src="/images/logo.png" alt="logo" />
          <p className={styles.logo_text}>Dialogue</p>
        </div>
        <div className={styles.splitter_vertical}></div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <p>About</p>
          </li>
          <li className={styles.menu_item}>
            <p>Documentation</p>
          </li>
          <li className={`${styles.menu_item} ${styles.menu_cta}`}>
            <p>Get started</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
