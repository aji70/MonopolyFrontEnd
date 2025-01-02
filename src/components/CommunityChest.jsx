import styles from "./CommunityChest.module.css";
import chest from "../images/chest.jpeg";
function CommunityChest() {
  return (
    <div className={styles.box}>
      <p className={styles.text}>COMMUNITY CHEST</p>
      <img
        className={styles.image}
        src={chest}
        alt={"chest"}
        style={{ width: "80px", height: "80px" }}
      />
    </div>
  );
}

export default CommunityChest;
