import styles from "./styles.module.css";

const Feature = ({ image, title, description, left }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.border_top}></div>
      {left ? <div className={styles.border_right}></div> : null}
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Feature;
