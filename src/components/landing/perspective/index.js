import styles from "./styles.module.css";

const Perspective = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Perspective;
