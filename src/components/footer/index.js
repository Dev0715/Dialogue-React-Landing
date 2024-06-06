import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <img src="/images/logo.png" alt="logo" />
        <p className={styles.logo_text}>Dialogue</p>
      </div>
      <p className={styles.description}>
        A new standard for academic and creative expression
      </p>
      <p className={`${styles.description} ${styles.description_designed}`}>
        Designed with love by Objects.cx
      </p>
    </div>
  );
};

export default Footer;
