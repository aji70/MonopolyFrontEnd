import styles from "./Right.module.css";
import Edges from "./Edges";
import Utility from "./Utility";
import free from "../images/free.jpeg";
import electric from "../images/electric.jpeg";
import Property from "./Property";
import CommunityChest from "./CommunityChest";
import Railstation from "./Railstation";

function Right() {
  return (
    <div className={styles.box}>
      <Property propertyName=" St. Charles Place" price="$140" bgcolor="pink" />
      <Utility header="Electric Company" image={electric} />
      <Property propertyName=" States Avenue" price="$140" bgcolor="pink" />
      <Property propertyName=" Virginia  Avenue" price="$160" bgcolor="pink" />
      <Railstation header="B. & O. Railroad" />
      <Property propertyName=" St. James Place" price="$180" bgcolor="orange" />
      <CommunityChest />
      <Property
        propertyName=" Tennessee Avenue"
        price="$180"
        bgcolor="orange"
      />
      <Property propertyName=" New York Avenue" price="$200" bgcolor="orange" />
      <Edges header="FREE" image={free} footer="PARKING" />
    </div>
  );
}

export default Right;
