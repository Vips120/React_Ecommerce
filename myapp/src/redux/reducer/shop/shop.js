import { SHOP_PRODUCT, PRODUCT_ID,SHOP_LOADING } from '../../action/shop/shop.type';

export const Shopdata = (state = null,action) => {
    switch (action.type) {

        case SHOP_PRODUCT:
            return { ...state, loading: false, data: action.payload };
            default:
                    return state;
    }
};

export const DataById = (state = null, action) => {
    switch (action.type) {
        case SHOP_LOADING:
            return { ...state, loading: true }
        case PRODUCT_ID:
            return { ...state, data: action.payload, loading: false }
        default:
            return state;
    }
}


