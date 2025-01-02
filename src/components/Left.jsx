import CommunityChest from "./CommunityChest";

import styles from "./Left.module.css";
import Property from "./Property";
import Railstation from "./Railstation";

import Chance from "./Chance";
import Tax from "./Tax";
function Left() {
  return (
    <div className={styles.box}>
      <Property propertyName=" BoardWalk" price="$400" bgcolor="darkblue" />
      <Tax type="Bank Deposit" amount="Pay $100" />
      <Property propertyName=" Park Place" price="$350" bgcolor="darkblue" />
      <Chance />
      <Railstation header="Short Line" />
      <Property
        propertyName=" Pennsylvania  Avenue"
        price="$320"
        bgcolor="green"
      />
      <CommunityChest />
      <Property
        propertyName=" North Carolina Avenue"
        price="$300"
        bgcolor="green"
      />
      <Property propertyName=" Pacific  Avenue" price="$300" bgcolor="green" />
    </div>
  );
}

export default Left;
