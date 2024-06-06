import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <img src="/images/logo.png" alt="logo" />
          <p className={styles.logo_text}>Dialogue</p>
        </div>
        <div className={styles.logo_vertical}></div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>About</li>
          <li className={styles.menu_item}>Documentation</li>
          <li className={`${styles.menu_item} ${styles.menu_cta}`}>
            Get started
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
