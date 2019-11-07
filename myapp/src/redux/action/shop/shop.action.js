import { SHOP_PRODUCT } from './shop.type';
import getShopData from '../../API/shop';
const ShopData = () => {
   return async (dispatch) => {
        let item = await getShopData();
             dispatch({type: SHOP_PRODUCT, payload: item.data})
    };
};
export default ShopData;