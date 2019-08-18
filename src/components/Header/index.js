import Header from "./components";
import connect from "./containers/connect";

import { compose } from "ramda";
import lifecycle from "./containers/lifecycle";

export default compose(
  connect,
  lifecycle
)(Header);
