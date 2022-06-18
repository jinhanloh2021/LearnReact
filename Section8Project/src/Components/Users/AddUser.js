import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser(props) {
  const [error, setError] = useState();

  const nameInputRef = useRef(); //connect to an element using prop ref=nameInputRef //return type is a real DOM element
  const ageInputRef = useRef(); //contains { current: DOMObject } Read using ageInputRef.current.value

  //called when form submitted
  const addUserHandler = (event) => {
    event.preventDefault(); //prevents calling the HTTP post method
    const enteredName = nameInputRef.current.value; //fetching data using refs
    const enteredUserAge = ageInputRef.current.value; //these two inputs are uncontrolled components, because their internal state is not controlled by react.
    if (!enteredName.trim() || !enteredUserAge.trim()) {
      //error state depends on the value of username and age ONSUBMIT, not onChange.
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than 0)',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge); // Lifting the state up to App.js. userList state in App.js
    nameInputRef.current.value = ''; //not using React. Abit hacky. This is uncontrolled component.
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null); //DOM re-rerenders and the error overlay and modal disappears.
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
