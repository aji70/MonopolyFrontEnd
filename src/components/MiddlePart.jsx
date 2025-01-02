import styles from "./MiddlePart.module.css";
import Left from "./Left";
import Mid from "./Mid";
import Right from "./Right";

function MiddlePart() {
  return (
    <div className={styles.box}>
      <Left />
      <Mid />
      <Right />
    </div>
  );
}

export default MiddlePart;
