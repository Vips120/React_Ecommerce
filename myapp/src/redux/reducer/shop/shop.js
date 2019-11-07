import { SHOP_PRODUCT } from '../../action/shop/shop.type';

const Shopdata = (state=null,action) => {
    switch (action.type) {
        case SHOP_PRODUCT:
            return action.payload;
        default:
            return state;
      }
};


export default Shopdata;

