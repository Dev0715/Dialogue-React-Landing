import Finisher from "../components/landing/finisher";
import LandingHero from "../components/landing/hero";
import Service from "../components/landing/service";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <LandingHero />
      <Service
        src="/images/information-resolution.png"
        image_description="Information resolution scaling"
        title="Get to the story behind the story in the blink of an eye"
        description="Dialogue presents information across Views. Instantly surface section summaries, core ideas and references. Get faster to what you find interesting."
      />
      <Service
        src="/images/conversational.png"
        image_description="Conversational text editing & image creation"
        title="Halve the time needed to communicate and illustrate your thoughts"
        description="Dialogue integrates and analyses your knowledge bases. Informing relevant text editing suggestions. And creative directions to bring your work alive with personalized imagery."
      />
      <Service
        src="/images/interactive-knowledge.png"
        image_description="Interactive knowledge network graphs"
        title="Find previously unforeseen connections between ideas"
        description="Dialogue consults the latest research and publications. See how others are talking about similar ideas and concepts. Never loose sight of the big picture."
      />
      <Finisher />
    </div>
  );
};

export default LandingPage;
