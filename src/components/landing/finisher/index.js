import Perspective from "../perspective";
import styles from "./styles.module.css";

const Finisher = () => {
  const perspectives = [
    {
      title: "Generative presentations",
      description:
        "Package and share your thoughts in multi-media presentations. Generate first drafts in one click, and refine the output page by page.",
    },
    {
      title: "Layout optimization",
      description:
        "Build an effective document structure with minimal effort. Choose from relevant AI suggestion, and deliver your thoughts with precision.",
    },
    {
      title: "Engagement analytics",
      description:
        "Identify the most engaging parts of your content and areas that need improvement. Keep your audience engaged throughout their reading experience.",
    },
    {
      title: "360 import and export",
      description:
        "Whether you're starting a new project or resuming an existing one. Minimize the time spent on format conversions and ensuring a smooth transfer of information.",
    },
    {
      title: "Multi-lingual support",
      description:
        "Automatically translate your documents with accuracy. Refine each translation for cultural relevance and clarity. enabling effective communication with a global audience",
    },
    {
      title: "Knowledge vault",
      description:
        "Build a comprehensive library of resources that supports your ongoing and future projects, ensuring that your critical data is always accessible and well-organized",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.perspective_wrapper}>
        {perspectives.map((item, index) => (
          <Perspective
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Finisher;
