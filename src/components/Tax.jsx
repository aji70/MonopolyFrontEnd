import styles from "./Tax.module.css";

function Tax({ type, amount }) {
  return (
    <div className={styles.box}>
      <h3>{type}</h3>
      <p>{amount}</p>
    </div>
  );
}

export default Tax;
