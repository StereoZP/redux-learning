import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {logger} from "./middleware/logger";
import {reducer} from "./store/reducer";
import {timeOut} from "./middleware/timeOut";

const store = createStore(reducer, applyMiddleware(logger, timeOut))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
