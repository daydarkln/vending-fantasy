import List from "./components";
import withHandlers from "./containers/withHandlers";
import lifecycle from "./containers/lifecycle";
import connect from "./containers/connect";
import { compose } from "redux";

export default compose(
  connect,
  withHandlers,
  lifecycle,
)(List);
