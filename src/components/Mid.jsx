import styles from "./Mid.module.css";

import Bottom from "./Bottom";
import MidWriteUP from "./MidWriteUP";

function Mid() {
  return (
    <div className={styles.boxm}>
      <MidWriteUP />
      <Bottom />
    </div>
  );
}

export default Mid;
