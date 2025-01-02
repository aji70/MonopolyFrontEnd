import styles from "./PropertyLayout.module.css";
// import Edges from "./Edges";
import Property from "./Property";
import CommunityChest from "./CommunityChest";
import Tax from "./Tax";
import Railstation from "./Railstation";
import Chance from "./Chance";

function PropertyLayout() {
  return (
    <div className={styles.box}>
      <Property
        propertyName=" Mediterranean Avenue"
        price="$50"
        bgcolor="purple"
      />
      <CommunityChest />
      <Property
        propertyName=" Mediterranean Avenue"
        price="$50"
        bgcolor="purple"
      />
      <Tax type="Income Tax" amount=" Pay $200 or 10% of Total Asset" />
      <Railstation header="Reading Railroad" footer="$250" />
      <Property
        propertyName=" Oriental Avenue"
        price="$100"
        bgcolor="#80c1eb"
      />

      <Chance />
    </div>
  );
}

export default PropertyLayout;
