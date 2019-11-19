import { cartItem } from "../../action/shop/shop.action";

export const Cartutilty = (oldstate, nextstate) => {
    console.log(oldstate, nextstate);
    const existingcartitems = oldstate.find(data => data.data._id === nextstate.data._id);
    console.log(existingcartitems);
    if (existingcartitems) {
      return  oldstate.map(cartdata =>
            cartdata.data._id === nextstate.data._id ?
                { ...cartdata, quantity: cartdata.quantity + 1 }
                : cartdata
        )
    }
    return [...oldstate, { ...nextstate, quantity: 1 }]
};

export const RemoveCartutility = (oldstate, removestate) => {
    const existingcartitems = oldstate.find(data => data.data._id === removestate._id);
    if (existingcartitems) {
        return oldstate.filter(data => data.data._id !== removestate._id);
    }
    return oldstate.map(carItem => (carItem.data._id === removestate._id ? {...carItem, quantity: cartItem.quantity -1}: cartItem ))
}