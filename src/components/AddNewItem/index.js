import AddNewItem from "./components";
import withFormik from "./containers/withFormik";
import connect from "./containers/connect";

import { compose } from "ramda";

export default compose(
  connect,
  withFormik,
)(AddNewItem);
