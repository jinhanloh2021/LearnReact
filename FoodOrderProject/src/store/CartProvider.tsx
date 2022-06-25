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

//define ways to update the cartState. Returns an updated cartState. For useReducer hook.
const cartReducer = (
  state: CartState,
  action: { type: string; payload: Item }
): CartState => {
  // console.log('Reduced');
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const updatedState = { ...state };

      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      updatedState.totalAmount = updatedTotalAmount;

      const existingCartItemIndex: number = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingCartItemIndex < 0) {
        updatedState.items.push(action.payload);
        return updatedState;
      }
      updatedState.items[existingCartItemIndex].amount += action.payload.amount;
      return updatedState;

    case ACTIONS.REMOVE_ITEM:
      return defaultCartState;

    default:
      return state;
  }
};

//Inside the CartProvider component, we have a we also have a useReducer. This allows use to have the
//ability to share a state easily through useContext, and also ensure that that state is complex with
//useReducer. We share not only the cart state, but also the functions to manipulate the cart state,
//such as addToCart, and removeFromCart.

export default function CartProvider({ children }: Props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  if (cartState === undefined || dispatchCartAction === undefined) return <></>; //ideally throw error

  const addItemToCartHandler = (item: Item) => {
    // console.log('Dispatched');
    dispatchCartAction({ type: ACTIONS.ADD_ITEM, payload: item });
  };
  const removeItemFromCartHandler = (id: string) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  //For useContext, we can call the Provider on the React.context object, and pass in a value prop.
  //When value prop changes, every child component that uses CartContext will be re-rendered.
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
