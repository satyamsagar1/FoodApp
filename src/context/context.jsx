import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const context = createContext(null);

const ContextProvider = (props) => {
  const [cartitems, setcartitems] = useState({});

  const addToCart = (itemId) => {
    setcartitems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setcartitems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const getTotalCartAmount=()=>
  {
    let totalAmount=0;
    for(const item in cartitems){
      if(cartitems[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item);
        totalAmount += itemInfo.price*cartitems[item];
      }
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartitems,
    addToCart,
    removeFromCart,
    setcartitems,
    getTotalCartAmount,
  };

  return (
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
