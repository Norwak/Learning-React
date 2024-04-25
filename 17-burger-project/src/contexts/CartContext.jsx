import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {},
});



function cartReducer(state, action) {
  const items = structuredClone(state.items);


  if (action.type === 'ADD_ITEM') {
    const itemIndex = items.findIndex(item => item.id === action.item.id);

    if (itemIndex > -1) {
      const item = structuredClone(items[itemIndex]);
      item.quantity = item.quantity + 1;

      items[itemIndex] = item;
    } else {
      const newItem = structuredClone(action.item);
      newItem.quantity = 1;

      items.push(newItem);
    }

    return {...state, items: items};
  }


  if (action.type === 'REMOVE_ITEM') {
    const itemIndex = items.findIndex(item => item.id === action.id);
    
    if (itemIndex > -1) {
      const item = structuredClone(items[itemIndex]);
      if (item.quantity === 1) {
        items.splice(itemIndex, 1);
      } else {
        item.quantity -= 1;
        items[itemIndex] = item;
      }
    }

    return {...state, items: items};
  }


  if (action.type === 'CLEAR_CART') {
    return {...state, items: []};
  }


  return state;
}



export function CartContextProvider({children}) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

  function addItem(item) {
    dispatchCartAction({type: 'ADD_ITEM', item});
  }

  function removeItem(id) {
    dispatchCartAction({type: 'REMOVE_ITEM', id});
  }

  function clearCart() {
    dispatchCartAction({type: 'CLEAR_CART'});
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;