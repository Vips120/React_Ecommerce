import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, createStore } from 'redux';
import {Provider } from 'react-redux';
import Reducer from './redux/reducer/index';
import Thunk from 'redux-thunk';
let store = createStore(Reducer, applyMiddleware(Thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
