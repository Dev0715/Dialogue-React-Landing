import styles from "./styles.module.css";

const Service = ({ src, image_description, title, description }) => {
  return (
    <div className={styles.service}>
      <div className={styles.splitter} />
      <img className={styles.image} src={src} alt="information" />
      <p className={styles.image_description}>{image_description}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Service;
