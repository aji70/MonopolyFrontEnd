import styles from "./Railstation.module.css";
import train from "../images/train.png";
function Railstation({ header, footer }) {
  return (
    <div className={styles.box}>
      <h3 className={styles.text}>{header}</h3>
      <img
        className={styles.image}
        src={train}
        alt={"train"}
        style={{ width: "50px", height: "50px" }}
      />
      <p className={styles.text}>{footer}</p>
    </div>
  );
}

export default Railstation;