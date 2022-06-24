import React from 'react';

const CartContext = React.createContext({
  items: [''],
  totalAmount: 0,
  addItem: (item: string): void => {},
  removeItem: (id: string): void => {},
});

export default CartContext;
