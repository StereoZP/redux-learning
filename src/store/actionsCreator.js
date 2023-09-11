import * as ACTIONS from "./actions";

export const addCash = (cash) => ({
    type: ACTIONS.ADD_CASH,
    payload: cash
})
export const getCash = (cash) => ({
    type: ACTIONS.GET_CASH,
    payload: cash,
    meta: {delayMs: 1000}
})