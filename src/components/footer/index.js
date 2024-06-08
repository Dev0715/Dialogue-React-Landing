import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_wrapper}>
        <img
          className={styles.logo_desktop}
          src="/images/logo.svg"
          alt="logo"
        />
        <img
          className={styles.logo_mobile}
          src="/images/logo_mobile.svg"
          alt="logo"
        />
        <p className={styles.logo_text}>Dialogue</p>
      </div>
      <div className={styles.description_wrapper}>
        <p className={styles.description}>
          A new standard for academic and creative expression
        </p>
      </div>
      <p className={styles.description}>Designed with love by Objects.cx</p>
    </div>
  );
};

export default Footer;
