import "./cart-icon.scss"
import { useContext } from "react";
import { SlBasket } from "react-icons/sl";

import {CartContext} from "../../context/cart.context"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  
    return (
      <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <SlBasket className='shopping-icon' />
        <span className='item-count'>{ cartCount}</span>
      </div>
    );
  };
  
  export default CartIcon;
  