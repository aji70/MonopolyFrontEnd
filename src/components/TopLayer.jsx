import styles from "./TopLayer.module.css";

import PropertyLayout from "./PropertyLayout";

function TopLayer() {
  return (
    <div className={styles.box}>
      <PropertyLayout />
    </div>
  );
}

export default TopLayer;
