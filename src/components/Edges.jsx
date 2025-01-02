import styles from "./Edges.module.css";
function Edges({ header, image, footer }) {
  return (
    <div className={styles.box}>
      <h3 className={styles.text}>{header}</h3>
      <img
        className={styles.image}
        src={image}
        alt={footer}
        style={{ width: "50px", height: "50px" }}
      />
      <h3 className={styles.text}>{footer}</h3>
    </div>
  );
}

export default Edges;
