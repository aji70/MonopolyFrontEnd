import Edges from "./Edges";
// import freeParking from "../images/freeParking.jpg";
import styles from "./TopLayer.module.css";
import go from "../images/go.jpg";
import PropertyLayout from "./PropertyLayout";

function TopLayer() {
  return (
    <div className={styles.box}>
      <Edges header={"Collect $200"} image={go} footer={"GO"} />
      <PropertyLayout />
    </div>
  );
}

export default TopLayer;
