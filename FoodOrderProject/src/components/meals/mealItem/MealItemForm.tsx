import React from 'react';
import './mealItemForm.scss';
import Input from '../../UI/Input';

type Props = { mealId: string };

export default function MealItemForm({ mealId }: Props) {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: mealId,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
