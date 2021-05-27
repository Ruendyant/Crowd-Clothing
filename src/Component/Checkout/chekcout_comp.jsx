import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectorCartItems, selectorCartItemsTotal } from '../../redux/cart/cart-selector';
import CheckoutItem from '../Checkout-item/checkout-item_comp';
import StripeCheckoutPage from '../stripe/stripe_comp';

import './chekcout_styles.scss';

const Checkout = ({total, cart}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <h4>Product</h4>
        </div>
      <div className="header-block">
        <h4>Name</h4>
      </div>
      <div className="header-block">
        <h4>Quantity</h4>
        
      </div>
      <div className="header-block">
        <h4>Price</h4>
        
      </div>
      <div className="header-block">
        <h4>Remove</h4>
        
      </div>
      </div>
        {
          cart.map(item => (
            <CheckoutItem key={item.id} cartItem={item}/>
          ))
        }
      <span className="total">Total : ${total}</span>
      <StripeCheckoutPage price={total}/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  total : selectorCartItemsTotal,
  cart : selectorCartItems
})

export default connect(mapStateToProps)(Checkout);