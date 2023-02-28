import "./cart-icon.scss"
import { useContext } from "react";
import { SlBasket } from "react-icons/sl";

import {CartContext} from "../../context/cart.context"

function CartIcon() {
    const { toggleIsCartOpen} = useContext(CartContext)
   
    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <SlBasket  className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}
export default CartIcon