import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { Shopdata, DataById } from './shop/shop';
import {UserLogin, UserRegister } from './user/user';
export const reducer = combineReducers({
    shopper: Shopdata,
    shopId: DataById,
    login: UserLogin, register: UserRegister
});

export const persistConfig = {
    key: "root",
    storage,
    whitelist:['login']
};