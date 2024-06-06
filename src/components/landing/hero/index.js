import styles from "./styles.module.css";

const LandingHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img
          className={styles.image}
          src="/images/hero-background.png"
          alt="hero-background"
        />
        <div className={styles.gradient_layer_left}></div>
        <div className={styles.gradient_layer_right}></div>
        <div className={styles.gradient_layer_full}></div>
      </div>
      <div className={styles.content_wrapper}>
        <p className={styles.title}>
          A new standard for academic and creative expression
        </p>
        <p className={styles.description}>
          Document the breadth and depth of your work with AI. Get your ideas
          across better, and faster.
        </p>
        <div className={styles.cta_wrapper}>
          <button className={styles.cta_button}>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
