import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Shop } from '../../Assets/shop-icon.svg';
import { CartAction } from '../../redux/cart/cart-action';
import { selectorCartItemsCount } from '../../redux/cart/cart-selector';

import './shop-icon_styles.scss';
import {createStructuredSelector} from 'reselect';


const CartIcon = ({toggleIcon, itemCount}) => 
<div className="cart-icon"  onClick={toggleIcon}>
  <Shop className="shopicon" />
  <span className="item-count">{itemCount}</span>
</div>

const mapDispatchToProps = (dispatch) => ({
  toggleIcon : () => dispatch(CartAction())
})

const mapStateToProps = createStructuredSelector({
  itemCount : selectorCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);