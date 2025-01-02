import styles from "./Bottom.module.css";
import Chance from "./Chance";
import Property from "./Property";
import Railstation from "./Railstation";
import Utility from "./Utility";
import water from "../images/water.jpeg";
import Edges from "./Edges";
import gotojail from "../images/gotojail.jpeg";

function Bottom() {
  return (
    <div className={styles.box}>
      <Edges header="Go to" image={gotojail} footer="JAIL!!!" />
      <Property propertyName=" Marvin Gardens" price="$280" bgcolor="yellow" />
      <Utility header="Water Works" image={water} />
      <Property propertyName=" Ventnor Avenue" price="$260" bgcolor="yellow" />
      <Property propertyName=" Atlantic Avenue" price="$260" bgcolor="yellow" />
      <Railstation header="Pennsylvania Railroad" />
      <Property propertyName=" Illinois Avenue" price="$240" bgcolor="red" />
      <Property propertyName=" Indiana Avenue" price="$220" bgcolor="red" />
      <Chance />
      <Property propertyName=" Kentucky Avenue" price="$220" bgcolor="red" />
    </div>
  );
}

export default Bottom;
