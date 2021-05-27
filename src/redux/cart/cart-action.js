import CartActionTypes from "./cart-types";

export const CartAction = () => ({
  type:CartActionTypes.TOGGLE_SHOP_ICON
})

export const AddItems = item => ({
  type: CartActionTypes.ADD_ITEMS,
  payload:item
})

export const ClearItem = item => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload : item
})

export const RemoveItem = item => ({
  type: CartActionTypes.REMOVE_ITEMS,
  payload: item
})