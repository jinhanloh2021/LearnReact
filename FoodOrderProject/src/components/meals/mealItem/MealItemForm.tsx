import React, { useRef, useState } from 'react';
import './mealItemForm.scss';
import Input from '../../UI/Input';
import { Meal } from '../AvailableMeals';

type Props = { id: Meal['id']; onAddToCart: (amount: number) => void };

export default function MealItemForm({ id, onAddToCart }: Props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null); //useRef.current will only be null or HTMLInputElement. Passed to child Input and input element.
  
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //stop refresh page

    let enteredAmount: number = amountInputRef.current
      ? +amountInputRef.current.value.trim()
      : 0; //Checks for non-null, then returns value, else return 0:number
  
      if (enteredAmount === null || isNaN(enteredAmount) || enteredAmount < 0) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label='Quantity'
        input={{
          id:id,
          type:'number',
          min:'1',
          max:'5',
          step:'1',
          defaultValue:'1',
        }}
        ref={amountInputRef}
      />
      <div className="Button">
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount: 1-5</p>}
      </div>
    </form>
  );
}
