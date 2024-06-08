import Features from "../components/landing/features";
import LandingHero from "../components/landing/hero";
import Services from "../components/landing/services";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <LandingHero />
      <Services />
      <Features />
    </div>
  );
};

export default LandingPage;
