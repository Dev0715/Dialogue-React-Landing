import LandingHero from "../components/landing/hero";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <LandingHero />
    </div>
  );
};

export default LandingPage;
