import styles from "./PropertyLayout.module.css";
import go from "../images/go.jpg";
import Edges from "./Edges";
import Property from "./Property";
import CommunityChest from "./CommunityChest";
import Tax from "./Tax";
import Railstation from "./Railstation";
import Chance from "./Chance";
import jail from "../images/jail.jpeg";

function PropertyLayout() {
  return (
    <div className={styles.box}>
      <Edges header={"Collect $200"} image={go} footer={"GO"} />
      <Property
        propertyName=" Mediterranean Avenue"
        price="$50"
        bgcolor="purple"
      />
      <CommunityChest />
      <Property propertyName=" Baltic Avenue" price="$80" bgcolor="purple" />
      <Tax type="Income Tax" amount=" Pay $200 or 10% of Total Asset" />
      <Railstation header="Reading Railroad" />
      <Property
        propertyName=" Oriental Avenue"
        price="$100"
        bgcolor="#80c1eb"
      />

      <Chance />
      <Property propertyName=" Vermont Avenue" price="$100" bgcolor="#80c1eb" />
      <Property
        propertyName=" Connecticut Avenue"
        price="$120"
        bgcolor="#80c1eb"
      />
      <Edges header={"JAIL"} image={jail} footer={"Just Visiting"} />
    </div>
  );
}

export default PropertyLayout;
