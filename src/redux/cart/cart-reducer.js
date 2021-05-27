import CartActionTypes from "./cart-types"
import {AddCartItemsCount, RemoveCartItemsCount} from "./cart-utils"

const INITIAL = {
  hidden : true,
  cartItems : []
}

const CartReducer = (state=INITIAL, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_SHOP_ICON:
      return {
        ...state, 
        hidden : !state.hidden
      }
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state, 
        cartItems : AddCartItemsCount(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state, 
        cartItems : state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems : RemoveCartItemsCount(state.cartItems, action.payload)
      }
    default:
        return state;
  }
}

export default CartReducer;