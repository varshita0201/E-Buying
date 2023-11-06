import React,{useContext} from "react";
import { ShopContext } from "../shop/ShopContext";

export const CartItems=(props)=>{
    const{id,price,productName,productImage}=props.data;
    const{Items,addToCart,removeToCart,updateItems}=useContext(ShopContext);

    return(
    <div>
    <div className="cartItems">
        <img className="productImage" src={productImage}/>
       <div className="description"> 
        <p className="productName"> {productName}</p>
        <p className="price">Rs.{price}</p>
        <div className="buttons">
            <button className="remove" onClick={()=>removeToCart(id)}>-</button>
            <input className="input"value={Items[id]} onChange={(e)=>updateItems(Number(e.target.value),id)} />
            <button className="increase"onClick={()=>addToCart(id)} >+</button>
        </div>

       </div>
    </div>
    </div>
    )
}