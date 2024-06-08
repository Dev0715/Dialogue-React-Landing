// import { demo_url } from "../../header";
import styles from "./styles.module.css";

const LandingHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.image_wrapper}>
        <img
          className={styles.image}
          src="/images/hero-background.svg"
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
          Dialogue helps you document the breadth and depth of your work with
          AI. Get your ideas across better, and faster. Find people to innovate
          with.
        </p>
        {/* <a
          className={styles.cta_link}
          href={demo_url}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.cta_wrapper}>
            <div className={styles.cta_button}>Request a demo</div>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default LandingHero;
