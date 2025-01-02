import styles from "./Property.module.css";
function Property({ propertyName, price, bgcolor }) {
  return (
    <div className={styles.box}>
      <div
        style={{
          zIndex: 1,
          width: "120px%",
          height: "20%",
          backgroundColor: bgcolor,
          margin: 0,
          padding: 0,
        }}
      ></div>
      <h3 className={styles.text}>{propertyName}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Property;
