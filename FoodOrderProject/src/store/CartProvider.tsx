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
    case ACTIONS.ADD_ITEM: {
      let updatedCartState = { ...state };

      //Check if item is already in Item[]. If in, increment item.amount, if not in, push to Item[].
      const itemIndex: number = updatedCartState.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        updatedCartState.items.push(action.payload);
      } else {
        updatedCartState.items[itemIndex].amount += action.payload.amount;
      }

      //recalculate TotalAmount based on the Item[]
      const updatedTotalAmount: number = updatedCartState.items.reduce(
        (currentNum, item) => {
          return currentNum + item.amount;
        },
        0
      );
      updatedCartState.totalAmount = updatedTotalAmount;
      return updatedCartState;
    }
    case ACTIONS.REMOVE_ITEM: {
      let updatedCartState = { ...state };

      //Filter out item that wants to be removed.
      const itemIndex: number = updatedCartState.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        //item not found
        return state;
      } else {
        //item found in array
        updatedCartState.items[itemIndex].amount -= action.payload.amount;
      }

      if (updatedCartState.items[itemIndex].amount <= 0) {
        updatedCartState.items = updatedCartState.items.filter(
          (item) => item.id !== action.payload.id
        );
      }

      //get Total Amount based on updated Item[]
      const updatedTotalAmount: number = updatedCartState.items.reduce(
        (currentNum, item) => {
          return currentNum + item.amount;
        },
        0
      );
      updatedCartState.totalAmount = updatedTotalAmount;
      return updatedCartState;
    }
    default: {
      return state;
    }
  }
};

export default function CartProvider({ children }: Props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //if (cartState === undefined || dispatchCartAction === undefined) return <></>; //ideally throw error

  //update cartContext functions. We pass these setter function to our child components, for them to update our cartState.
  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: ACTIONS.ADD_ITEM, payload: item });
  };
  const removeItemFromCartHandler = (id: string, amount: number) => {
    dispatchCartAction({
      type: ACTIONS.REMOVE_ITEM,
      payload: { id: id, name: '', price: 0, amount: amount },
    });
  };

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
