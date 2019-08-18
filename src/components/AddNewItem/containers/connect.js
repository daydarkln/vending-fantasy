import { connect } from "react-redux";
import { addItem } from "../../List/actions";

const mapStateToProps = state => state.list;
const mapDispatchToProps = { addItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
