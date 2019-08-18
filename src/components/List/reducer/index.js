import * as types from "../types";
import { sortBy, prop } from "ramda";

const defaultState = {
  searchText: "",
  isMoneyEnough: true,
  vendingList: [],
  account: {
    balance: 0,
    name: ""
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_VENDING:
      return { ...state, vendingList: action.arr };
    case types.SET_ACCOUNT:
      return { ...state, account: action.obj };
    case types.UPDATE_VENDING:
      return {
        ...state,
        vendingList: sortBy(prop("id"))([
          ...state.vendingList.filter(item => item.id !== action.obj.id),
          action.obj
        ])
      };
    case types.UPDATE_ACCOUNT_BALANCE:
      return {
        ...state,
        account: {
          ...state.account,
          balance: action.newBalance
        }
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        vendingList: state.vendingList.filter(item => item.id !== action.id)
      };
    case types.ADD_ITEM:
      return {
        ...state,
        vendingList: sortBy(prop("id"))([
          ...state.vendingList,
          action.obj
        ])
      };
    default:
      return state;
  }
};
