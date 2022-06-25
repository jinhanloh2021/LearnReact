import React from 'react';

export type Item = {
  id: string;
  name: string;
  amount: number;
  price: number;
};
export const defaultItems: Item[] = [];

const CartContext = React.createContext({
  items: defaultItems,
  totalAmount: 0,
  addItem: (item: Item): void => {},
  removeItem: (id: Item['id']): void => {},
}); //Provide default value in createContext().

export default CartContext;
