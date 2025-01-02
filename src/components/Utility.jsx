import styles from "./Utility.module.css";

function Utility({ header, image }) {
  return (
    <div className={styles.box}>
      <h3 className={styles.text}>{header}</h3>
      <img
        className={styles.image}
        src={image}
        alt={header}
        style={{ width: "50px", height: "50px" }}
      />
      <p className={styles.text}>$150</p>
    </div>
  );
}

export default Utility;
