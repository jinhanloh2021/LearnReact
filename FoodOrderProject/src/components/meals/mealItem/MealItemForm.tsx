import React from 'react';
import './mealItemForm.scss';
import Input from '../../UI/Input';
import { Meal } from '../AvailableMeals';

type Props = { id: Meal['id'] };

export default function MealItemForm({ id }: Props) {
  return (
    <form className="form">
      <Input
        label="Quantity"
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <div className="Button">
        <button>+ Add</button>
      </div>
    </form>
  );
}
