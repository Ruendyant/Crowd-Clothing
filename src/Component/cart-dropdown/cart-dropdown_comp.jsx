import React from 'react';
import { connect } from 'react-redux';
import { selectorCartItems } from '../../redux/cart/cart-selector';
import CartItems from '../cart-item/cart-item_comp';
import SubmitButton from '../FormInput/submit_component';
import './cart-dropdown_styles.scss';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { CartAction } from '../../redux/cart/cart-action';


const Cart = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartitem => (
          <CartItems key={cartitem.id} item={cartitem} />
        ))
        : (
          <span className="empty-class">No Items</span>
        )
      }
    </div>
    <SubmitButton onClick={() => {
      history.push('/checkout')
      dispatch(CartAction())
      }}>GO TO CHECKOUT</SubmitButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));