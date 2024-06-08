import styles from "./styles.module.css";
import Service from "./service";

const Services = () => {
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
        "Dialogue integrates and analyses your knowledge bases. Bring your work to life with personalized editing suggestions and AI generated visual content.",
    },
    {
      src: "/images/interactive-knowledge.png",
      image_description: "Interactive knowledge network graphs",
      title: "Find people with complimentary skillsets and expertise",
      description:
        "Dialogue surfaces unforeseen connections between ideas. Learn what others have to say about subjects your interested in. Never loose sight of the big picture.",
    },
  ];

  return (
    <div className={styles.services}>
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
  );
};

export default Services;
