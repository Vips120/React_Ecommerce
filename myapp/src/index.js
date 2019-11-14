import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, createStore,compose } from 'redux';
import {Provider } from 'react-redux';
import { reducer } from './redux/reducer/index';
import Thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { persistConfig } from './redux/reducer/index';
import Loading from '../src/components/loader/loading';
const persistedReducer = persistReducer(persistConfig, reducer);
let composeEnhancer= (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
let store = createStore(persistedReducer, composeEnhancer(applyMiddleware(Thunk)));

let persiststore = persistStore(store);
ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<Loading/>}
            persistor={persiststore}
        >
        <App />

        </PersistGate>
     </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
