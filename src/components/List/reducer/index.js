import * as types from '../types';

const defaultState = {
    searchText: '',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_TEXT:
            return { ...state, ...action.str };
        default:
            return state;
    }
};