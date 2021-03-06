import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => state.list;
const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps);