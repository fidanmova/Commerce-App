import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{}
    
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    function toggleIsCartOpen() {
       setIsCartOpen(!isCartOpen) 
    } 

    const value={isCartOpen,setIsCartOpen,toggleIsCartOpen}  
       return( <CartContext.Provider value={value}>{ children}</CartContext.Provider>) 
}