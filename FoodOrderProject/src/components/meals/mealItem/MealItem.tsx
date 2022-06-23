import React from 'react';
import './mealItem.scss';
import MealItemForm from './MealItemForm';

type Props = {
  key: string;
  name: string;
  description: string;
  price: number;
};

export default function MealItem({ key, name, description, price }: Props) {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm mealId={key} />
      </div>
    </li>
  );
}
