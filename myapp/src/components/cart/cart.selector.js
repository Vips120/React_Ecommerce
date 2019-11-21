import { createSelector } from 'reselect'
let selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.items
);
export const selectCarteItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumlatedquantity, caritem) => accumlatedquantity + caritem.quantity * caritem.data.price, 0)
);