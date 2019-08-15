import * as types from "../types";

const defaultState = {
  searchText: "",
  isMoneyEnough: true,
  vendingList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_VENDING:
      return { ...state, vendingList: action.arr };
    case types.UPDATE_VENDING:
      return { ...state, vendingList: [...state.vendingList.filter(item => item.id !== action.obj.id), action.obj] };
    default:
      return state;
  }
};
