import * as types from "../types";
import axios from "axios";
import { values } from 'ramda';

export const setText = str => ({
  type: types.SET_TEXT,
  str
});

export const setVending = arr => ({
  type: types.SET_VENDING,
  arr
});

export const updateVending = obj => ({
  type: types.UPDATE_VENDING,
  obj
}) 

export const getList = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/vendingList");
  dispatch(setVending(res.data));
};

export const putAccount = (id, data) => async dispatch => {
  const res = await axios.patch(`http://localhost:3001/vendingList/${id}`, data);
  const accountData = await axios.get('http://localhost:3001/account');
  debugger
  dispatch(updateVending(res.data));
};
