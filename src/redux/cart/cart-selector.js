import {createSelector} from 'reselect';


const selectorCart = (state) => state.cart;

export const selectorCartItems = createSelector(
  [selectorCart],
  selectorCart => selectorCart.cartItems
)

export const selectorCartHidden = createSelector(
  [selectorCart],
  cartItems => cartItems.hidden
)

export const selectorCartItemsTotal = createSelector(
  [selectorCartItems],
  cartItems => cartItems.reduce((accum, cartItem) => accum + cartItem.quantity * cartItem.price, 0)
)

export const selectorCartItemsCount = createSelector(
  [selectorCartItems],
  cartItems => cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
)