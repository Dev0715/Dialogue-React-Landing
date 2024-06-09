import styles from "./styles.module.css";
import Service from "./service";

const Services = () => {
  const services = [
    {
      src_desktop: "/images/information-resolution.svg",
      src_mobile: "/images/information-resolution.png",
      image_description: "Information resolution scaling",
      title: "Get to the story behind the story in the blink of an eye",
      description:
        "Dialogue presents information across Views. Instantly surface section summaries, core ideas and references. Get faster to what you find interesting.",
    },
    {
      src_desktop: "/images/conversational.svg",
      src_mobile: "/images/conversational.png",
      image_description: "Conversational text editing & image creation",
      title:
        "Halve the time needed to communicate and illustrate your thoughts",
      description:
        "Dialogue integrates and analyses your knowledge bases. Bring your work to life with personalized editing suggestions and AI generated visual content.",
    },
    {
      src_desktop: "/images/interactive-knowledge.svg",
      src_mobile: "/images/interactive-knowledge.png",
      image_description: "Interactive knowledge network graphs",
      title: "Find people with complementary skillsets and expertise",
      description:
        "Dialogue surfaces unforeseen connections between ideas. Learn what others have to say about subjects you're interested in. Never loose sight of the big picture.",
    },
  ];

  return (
    <div className={styles.services}>
      {services.map((item, index) => (
        <Service
          key={index}
          src_desktop={item.src_desktop}
          src_mobile={item.src_mobile}
          image_description={item.image_description}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Services;
