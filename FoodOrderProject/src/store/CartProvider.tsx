import React from 'react';
import CartContext from './cart-context';

type Props = {
  children: JSX.Element[];
};

const addItemToCartHandler = (item: string) => {};

const removeItemFromCartHandler = (id: string) => {};

export default function CartProvider({ children }: Props) {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
