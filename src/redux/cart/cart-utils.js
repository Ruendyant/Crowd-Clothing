export const AddCartItemsCount = (cartItems, newItems) => {
  const existingitem = cartItems.find(item => item.id === newItems.id);

  if(existingitem) {
    return (
      cartItems.map(cartitem => cartitem.id === newItems.id ? 
        {...cartitem, quantity: cartitem.quantity + 1} : 
        cartitem)
    )
  }

  return [...cartItems, {...newItems, quantity : 1}];
}

export const RemoveCartItemsCount = (cartItems, removItems) => {
  const existingitem = cartItems.find(item => item.id === removItems.id);

  if(existingitem.quantity === 1) {
    return cartItems.filter(item => item.id !== removItems.id)
  }

  return cartItems.map(item => 
    item.id === removItems.id 
    ? {...item, quantity: item.quantity - 1} 
    : item)
}