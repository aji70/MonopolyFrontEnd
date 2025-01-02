import styles from "./Chance.module.css";
import chance from "../images/chance.jpeg";

function Chance() {
  return (
    <div className={styles.box}>
      <h3 className={styles.text}>Chance</h3>
      <img
        className={styles.image}
        src={chance}
        alt={"chance"}
        style={{ width: "50px", height: "80px" }}
      />
    </div>
  );
}

export default Chance;
