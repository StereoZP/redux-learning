import defaultState from "./store"
import * as ACTIONS from "./actions";

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONS.ADD_CASH:
            return {...state, cash: state.cash + action.payload};
        case ACTIONS.GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }
}