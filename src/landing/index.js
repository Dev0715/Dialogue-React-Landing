import Finisher from "../components/landing/finisher";
import LandingHero from "../components/landing/hero";
import Service from "../components/landing/service";
import styles from "./styles.module.css";

const LandingPage = () => {
  const services = [
    {
      src: "/images/information-resolution.png",
      image_description: "Information resolution scaling",
      title: "Get to the story behind the story in the blink of an eye",
      description:
        "Dialogue presents information across Views. Instantly surface section summaries, core ideas and references. Get faster to what you find interesting.",
    },
    {
      src: "/images/conversational.png",
      image_description: "Conversational text editing & image creation",
      title:
        "Halve the time needed to communicate and illustrate your thoughts",
      description:
        "Dialogue integrates and analyses your knowledge bases. Informing relevant text editing suggestions. And creative directions to bring your work alive with personalized imagery.",
    },
    {
      src: "/images/interactive-knowledge.png",
      image_description: "Interactive knowledge network graphs",
      title: "Find people with complimentary skillsets and expertise",
      description:
        "Dialogue consults the latest research and publications. See how others are talking about similar ideas and concepts. Never loose sight of the big picture.",
    },
  ];

  return (
    <div className={styles.container}>
      <LandingHero />
      <div className={styles.service_wrapper}>
        {services.map((item, index) => (
          <Service
            key={index}
            src={item.src}
            image_description={item.image_description}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Finisher />
    </div>
  );
};

export default LandingPage;
