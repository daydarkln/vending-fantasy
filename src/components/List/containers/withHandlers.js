import { withHandlers } from 'recompose';

export default withHandlers({
  handleSearch: props => (selectedKeys, confirm) => {
    confirm();
    props.setText(selectedKeys[0]);
  },

  handleReset: props => clearFilters => {
    clearFilters();
    props.setText('');
  },
})