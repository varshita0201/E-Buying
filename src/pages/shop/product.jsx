import React,{useContext} from "react";
import { ShopContext } from "./ShopContext";

export const Product=(props)=>{
    const{id,productName,price,productImage}=props.data;
    const {addToCart,Items}=useContext(ShopContext);

    const cartItemAmount=Items[id];
    return(
        <div className="product">
            <img  className="image" src={productImage}/>
            <div className="description">
                <p className="productName">{productName}</p>
                <p className="price">{price}</p>
            </div>
            <button className="add" onClick={()=>addToCart(id)}>Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
        </div>
    )
    
}