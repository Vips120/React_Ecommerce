import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { Shopdata, DataById,Addcart,Removecart } from './shop/shop';
import { UserLogin, UserRegister } from './user/user';
export const reducer = combineReducers({
    shopper: Shopdata,
    shopId: DataById,
    login: UserLogin, register: UserRegister,
    cart: Addcart
});

export const persistConfig = {
    key: "root",
    storage,
    whitelist: ['login', 'cart']
};