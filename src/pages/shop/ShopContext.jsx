import React, { useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../../components/Products";

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
};

export const ShopContextProvider=(props)=>{
    const[Items,setItems]=useState(getDefaultCart());
    const addToCart=(itemID)=>{
        setItems((prev)=>({...prev,[itemID]:prev[itemID]+1}));
    };

    const removeToCart=(itemID)=>{
        setItems((prev)=>({...prev,[itemID]:prev[itemID]-1}));
    };
    console.log(Items);

    const updateItems=(amount,itemID)=>{
        setItems((prev)=>({...prev,[itemID]:amount}))

    };

    const totalAmount=()=>{
        let amt=0;
        for(const item in Items){
            if(Items[item]>0){
                let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
                amt+=Items[item]*itemInfo.price;
            }
        }
        return amt;
    }

    const contextValue={Items,addToCart,removeToCart,updateItems,totalAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}