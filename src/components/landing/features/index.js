import Feature from "./feature";
import styles from "./styles.module.css";

const Features = () => {
  const features = [
    {
      image: "/images/features/feature-1.svg",
      title: "Generative presentations",
      description:
        "Package and share your thoughts in digestible formats. Generate first drafts in one click, and refine the output page by page as you go.",
    },
    {
      image: "/images/features/feature-2.svg",
      title: "Layout optimization",
      description:
        "Build an effective document structure with minimal effort. Choose from relevant AI suggestions, and deliver your thoughts with precision.",
    },
    {
      image: "/images/features/feature-3.svg",
      title: "Engagement analytics",
      description:
        "Identify the most engaging parts of your content and areas that need improvement. Keep your audience engaged throughout their reading experience. ",
    },
    {
      image: "/images/features/feature-4.svg",
      title: "360 import and export",
      description:
        "Whether you're starting a new project or resuming an existing one. Minimize the time spent on file format conversions and information sharing.",
    },
    {
      image: "/images/features/feature-5.svg",
      title: "Multilingual support",
      description:
        "Automatically translate your documents with accuracy. Refine each translation for cultural relevance and clarity.",
    },
    {
      image: "/images/features/feature-6.svg",
      title: "Knowledge galaxy",
      description:
        "Build a a space for resources that supports your ongoing and future projects. Easily secure, store, and retrieve your projects data at any time.",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.logo_wrapper}>
        <img
          className={styles.image}
          src="/images/logo-big.svg"
          alt="logo-big"
        />
        <div className={styles.title_wrapper}>
          <p className={styles.title}>
            Share unique perspectives and methods in a dedicated environment
          </p>
        </div>
      </div>
      <div className={styles.features_wrapper}>
        {features.map((item, index) => (
          <Feature
            key={index}
            left={index % 2 === 0}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
