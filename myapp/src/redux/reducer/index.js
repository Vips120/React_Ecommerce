import { combineReducers } from 'redux';
import Shopdata from './shop/shop';
const reducer = combineReducers({ shopper: Shopdata })
export default reducer;