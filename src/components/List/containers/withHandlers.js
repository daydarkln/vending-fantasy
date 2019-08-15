import { withHandlers } from "recompose";
import { curry, pathOr, map, when, propEq, assoc } from "ramda";

export default withHandlers({
  handleSearch: props => (selectedKeys, confirm) => {
    confirm();
    props.setText(selectedKeys[0]);
  },

  handleReset: props => clearFilters => {
    clearFilters();
    props.setText("");
  },
  buyItem: () => (props, id) => {
    const alter = curry((checked, key, items) =>
      map(when(propEq("id", key), assoc("count", checked)), items)
    );

    const count = pathOr([], ["vendingList"], props).find(
      item => item.id === id
    ).count;

    const updatedList = alter(count - 1, id, props.vendingList);
    debugger;
    props.putAccount(id, updatedList[0]);
  }
});
