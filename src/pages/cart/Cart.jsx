import React, { useContext } from "react";
import { CartItems } from "./CartItems";
import { PRODUCTS } from "../../components/Products";
import { ShopContext } from "../shop/ShopContext";
import './cart.css';
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const{Items,totalAmount}=useContext(ShopContext);
    const navigate=useNavigate();
    const finalAmt=totalAmount();
    return(
        <div >
            <h1>Cart Items</h1> 
            <div className="cart">
            {PRODUCTS.map((product)=>{
                if(Items[product.id]!==0){
                  return  <CartItems data={product}/>
                }
            })}
            </div>
            {totalAmount()>0 ? 
            <div>
        <p className="price"><b>Rs.{totalAmount()}</b></p>
        <div><button onClick={()=>navigate("/")} className="shopping" >Continue Shopping</button></div>
         </div>
            : "Your cart is empty"}
        </div>
    )
}