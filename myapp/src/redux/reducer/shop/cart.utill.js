import { cartItem } from "../../action/shop/shop.action";

export const Cartutilty = (oldstate, nextstate) => {
    const existingcartitems = oldstate.find(data => data.data._id === nextstate.data._id);
    console.log(existingcartitems);
    if (existingcartitems) {
      return  oldstate.map(cartdata =>
            cartdata.data._id === nextstate.data._id ?
                { ...cartdata, quantity: cartdata.quantity + 1 }
                : cartdata
        )
    };
    // console.log("price",existingcartitems.price);
    // let newPrice = oldstate.find
    return [...oldstate, { ...nextstate, quantity: 1 }]
};

export const RemoveCartutility = (oldstate, removestate) => {
    const existingcartitems = oldstate.find(data => data.data._id === removestate._id);
    if (existingcartitems) {
        return oldstate.filter(data => data.data._id !== removestate._id);
    }
    let newprice = existingcartitems.priceAmount - (existingcartitems.data.price * existingcartitems.quantity)
    return oldstate.map(carItem => (carItem.data._id === removestate._id ? { ...carItem, quantity: cartItem.quantity - 1,priceAmount:newprice } : cartItem))
};

export const AddQuantity = (oldstate, updatestate) => {
    const existingcartitems = oldstate.find(item => item.data._id === updatestate._id);
    existingcartitems.quantity += 1;
    return [...oldstate]
};

export const RemoveQuantity = (oldstate, removestate) => {
    const existingcartitems = oldstate.find(item => item.data._id === removestate._id);
    if (existingcartitems.quantity == 1) {
        oldstate.filter(item => item.data._id !== removestate._id);
        return [...oldstate]; 
    } else {
        existingcartitems.quantity -= 1;
        return [...oldstate];
    }

};