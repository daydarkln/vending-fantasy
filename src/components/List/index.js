import List from "./components";
import withProps from "./containers/withProps";
import withHandlers from "./containers/withHandlers";
import connect from "./containers/connect";
import { compose } from "redux";

export default compose(
  connect,
  withHandlers,
  withProps
)(List);
