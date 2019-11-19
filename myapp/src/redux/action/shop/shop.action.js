import { SHOP_PRODUCT, SHOP_LOADING, PRODUCT_ID, ADD_CART, REMOVE_CART } from './shop.type';
import getShopData, { UserDataById } from '../../API/shop';
import { history } from '../../helpers/history';
export const ShopData = () => {
     return async (dispatch) => {
          dispatch({ type: SHOP_LOADING });
          let item = await getShopData();
          setTimeout(() => {
               dispatch({type: SHOP_PRODUCT, payload: item.data})
          }, 1000);
             
    };
};
export const ShopProductId = (id) => {
     return async (dispatch) => {
          dispatch({ type: SHOP_LOADING });
          let dataId = await UserDataById(id);
          setTimeout(() => { 
               dispatch({ type: PRODUCT_ID, payload: dataId.data });
          }, 1000);
       
     };
};


export const cartItem = (id) => {
     alert(id);
     return async (dispatch) => {
          try {
               dispatch({ type: SHOP_LOADING });
               let dataId = await UserDataById(id);
               setTimeout(() => {
                    dispatch({ type: ADD_CART, payload: dataId.data });
                    history.push("/cart");
               }, 1000);
          }
          catch (ex) {
               console.log(ex.message);
          }
       
     };
};


export const removecartItem = (id) => {
     console.log(id);
     return async (dispatch) => {
          try {
               dispatch({ type: SHOP_LOADING });
               setTimeout(() => {
                    dispatch({ type: REMOVE_CART, payload: id });
               }, 1000);
          }
          catch (ex) {
               console.log(ex.message);
          }
       
     };
};