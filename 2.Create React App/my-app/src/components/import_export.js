import APPL from "./component.js";
import { banana as BANA, orange } from "./component1.js";
// import * as fruits from "./component1.js";

var exportedApple = APPL;

const ImportExport = () => {
  console.log("export done from component.js", exportedApple);
  console.log("export done from component1.js", BANA, orange);
  //ONE MORE WAY OF IMPORTING banana and orange from component1.js
  //   console.log("export done from component1.js", fruits.banana, fruits.orange);
  return (
    <div>
      <h1>dsagsxdg</h1>
    </div>
  );
};
export default ImportExport;
