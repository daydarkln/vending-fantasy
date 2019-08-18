import * as types from "../types";
import axios from "axios";
import { pathOr, assocPath } from "ramda";
import { message } from "antd";

export const setText = str => ({
  type: types.SET_TEXT,
  str
});

export const setVending = arr => ({
  type: types.SET_VENDING,
  arr
});

export const setAccount = obj => ({
  type: types.SET_ACCOUNT,
  obj
});

export const updateVending = obj => ({
  type: types.UPDATE_VENDING,
  obj
});

export const getList = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/vendingList");
  dispatch(setVending(res.data));
};

export const getAccount = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/account");
  dispatch(setAccount(res.data));
};

export const showError = msg => {
  message.error(msg);
  return { type: types.SHOW_ERROR };
};

export const showSuccess = msg => {
  message.success(msg);
  return { type: types.SHOW_SUCCESS };
};

export const updateAccountBalance = newBalance => ({
  type: types.UPDATE_ACCOUNT_BALANCE,
  newBalance
});

export const removeItem = id => ({
  type: types.REMOVE_ITEM,
  id
});

export const addItem = obj => ({
  type: types.ADD_ITEM,
  obj
});

export const putAccount = (id, data) => async dispatch => {
  let res;
  if (data.count >= 0) {
    res = await axios.patch(`http://localhost:3001/vendingList/${id}`, data);
    debugger
    const accountData = await axios.get("http://localhost:3001/account");
    const account = pathOr({}, ["data"], accountData);
    const cost = pathOr(0, ["cost"], data);
    const newBalance = account.balance - cost;
    if (newBalance < 0) {
      dispatch(showError("Недостаточно денег"));
    } else {
      await axios.patch(
        "http://localhost:3001/account",
        assocPath(["balance"], newBalance, account)
      );
      dispatch(showSuccess("Успешно"));
      dispatch(updateAccountBalance(newBalance));
    }
    dispatch(updateVending(res.data));
  }
};
