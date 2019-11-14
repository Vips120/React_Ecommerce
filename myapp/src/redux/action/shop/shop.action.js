import { SHOP_PRODUCT, SHOP_LOADING, PRODUCT_ID } from './shop.type';
import getShopData, {UserDataById} from '../../API/shop';
export const ShopData = () => {
     return async (dispatch) => {
          dispatch({ type: SHOP_LOADING });
        let item = await getShopData();
             dispatch({type: SHOP_PRODUCT, payload: item.data})
    };
};
export const ShopProductId = (id) => {
     return async (dispatch) => {
          dispatch({ type: SHOP_LOADING });
          let dataId = await UserDataById(id);
          dispatch({ type: PRODUCT_ID, payload: dataId.data });
     };
};