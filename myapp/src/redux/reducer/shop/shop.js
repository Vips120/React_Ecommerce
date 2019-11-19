import { SHOP_PRODUCT, PRODUCT_ID,SHOP_LOADING,ADD_CART,REMOVE_CART } from '../../action/shop/shop.type';
import { Cartutilty,RemoveCartutility} from "./cart.utill";
export const Shopdata = (state = null,action) => {
    switch (action.type) {
        case SHOP_LOADING:
            return { loading: true }
        case SHOP_PRODUCT:
            return {loading: false, data: action.payload };
            default:
                    return state;
    }
};

export const DataById = (state = null, action) => {
    switch (action.type) {
        case SHOP_LOADING:
            return { loading: true }
        case PRODUCT_ID:
            return { data: action.payload, loading: false }
        default:
            return state;
    }
};
const INITIAL_STATE = {
    loading: true,
    items: []
};
export const Addcart = (state = INITIAL_STATE, action) => {
    // console.log('reducer',state.items);
    switch (action.type) {
        case SHOP_LOADING:
            return { ...state, loading: state.loading }
        case ADD_CART:
            return { ...state, items: Cartutilty(state.items, action.payload), loading: false }
            case REMOVE_CART:
                return { ...state, items: state.items.filter(data => data.data._id !== action.payload._id), loading:false }
        default:
            return state;
    }
};

