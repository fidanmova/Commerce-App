import React from 'react'
import "./cart-item.scss"

// export default function CartItem({ cartItem }) {
//     const {name,quantity}=cartItem
//   return (
//       <div>
//           <h2>{name}</h2>
//           <span>{ quantity}</span>
//     </div>
//   )
// }
const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;