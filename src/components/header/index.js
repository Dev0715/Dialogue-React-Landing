import styles from "./styles.module.css";

export const demo_url = "https://ea44mkxak0j.typeform.com/to/pfnW1T8Y";
const about_url = "https://objects.cx/Dialogue";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <img src="/images/logo.svg" alt="logo" />
          <p className={styles.logo_text}>Dialogue</p>
        </div>
        <div className={styles.splitter_vertical}></div>
        <ul className={styles.menu}>
          <a
            className={styles.menu_link}
            href={about_url}
            target="_blank"
            rel="noreferrer"
          >
            <li className={styles.menu_item}>
              <p>About</p>
            </li>
          </a>
          {/* <li className={styles.menu_item}>
            <p>Documentation</p>
          </li> */}
          <a
            className={styles.menu_link}
            href={demo_url}
            target="_blank"
            rel="noreferrer"
          >
            <li className={`${styles.menu_item} ${styles.menu_cta}`}>
              <p>Request a demo</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
