import styles from "./styles.module.css";

const Service = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img
          className={styles.image}
          src="/images/information-resolution.png"
          alt="information"
        />
        <div className={styles.gradient_layer}></div>
      </div>
      <p className={styles.image_description}>Information resolution scaling</p>
      <p className={styles.title}>
        Get to the story behind the story in the blink of an eye
      </p>
      <p className={styles.description}>
        Dialogue presents information across Views. Instantly surface section
        summaries, core ideas and references. Get faster to what you find
        interesting.
      </p>
    </div>
  );
};

export default Service;
