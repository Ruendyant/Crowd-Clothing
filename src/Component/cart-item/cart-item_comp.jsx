import React from 'react';

import './cart-item_styles.scss';

const CartItems = ({item : {imageUrl1, name, price, quantity}}) => (
  <div className="cart-item">
    <img src={imageUrl1} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} x ${price}</span>
    </div>
  </div>
)

export default CartItems;