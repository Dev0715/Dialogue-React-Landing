import styles from "./styles.module.css";

const Service = ({
  src_desktop,
  src_mobile,
  image_description,
  title,
  description,
}) => {
  return (
    <div className={styles.service}>
      <div className={styles.wrapper}>
        <div className={styles.splitter} />
        <img
          className={styles.image_desktop}
          src={src_desktop}
          alt="information"
        />
        <img
          className={styles.image_mobile}
          src={src_mobile}
          alt="information"
        />
        <p className={styles.image_description}>{image_description}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Service;
