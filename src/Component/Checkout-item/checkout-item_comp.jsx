import React from 'react';
import { connect } from 'react-redux';
import { AddItems, ClearItem, RemoveItem } from '../../redux/cart/cart-action';

import './checkout-item_styles.scss';

const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
  const {name, imageUrl1, price, quantity} = cartItem;
  return (<div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl1} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10006;</div>
  </div>)
}

const mapDispatchToProps = dispatch => ({
  clearItem : item => dispatch(ClearItem(item)),
  removeItem : item => dispatch(RemoveItem(item)),
  addItem : item => dispatch(AddItems(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);