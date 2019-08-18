import { connect } from "react-redux";
import { getAccount } from "../../List/actions";

const mapStateToProps = state => state.list;
const mapDispatchToProps = {getAccount}

export default connect(mapStateToProps, mapDispatchToProps);
