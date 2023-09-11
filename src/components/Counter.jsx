import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCash, getCash} from "../store/actionsCreator";

const Counter = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    return (
        <div>
            <div>{cash}</div>
            <button onClick={()=>dispatch(addCash(5))}>Add Cash</button>
            <button onClick={()=>dispatch(getCash(5))}>Get Cash</button>
        </div>
    );
};

export default Counter;