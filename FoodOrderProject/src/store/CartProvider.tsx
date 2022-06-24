import React, { useReducer } from 'react';
import CartContext, { Item, defaultItems } from './cart-context';

type Props = {
  children: JSX.Element[];
};

type CartState = {
  items: Item[];
  totalAmount: number;
};

const defaultCartState: CartState = {
  items: defaultItems,
  totalAmount: 0,
};

const ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
};

const cartReducer = (
  state: CartState,
  action: { type: string; payload: Item }
): CartState => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const updatedItems = state.items.concat(action.payload); //returns new array. push() adds to existing array
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * (action.payload.amount || 1);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case ACTIONS.REMOVE_ITEM:
      return defaultCartState;

    default:
      return state;
  }
};

export default function CartProvider({ children }: Props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  if (cartState === undefined || dispatchCartAction === undefined) return <></>; //ideally throw error

  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: ACTIONS.ADD_ITEM, payload: item });
  };
  const removeItemFromCartHandler = (id: string) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
