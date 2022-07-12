import React, { MutableRefObject } from 'react';
import { useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const renderError = enteredName.trim() === '' && enteredNameTouched;

  //overall formValidState
  const formValid = enteredNameIsValid; // && enteredAgeIsValid && ...

  const nameInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (renderError) {
      return;
    }
    console.log(`Submission: ${enteredName}`); //using state gets value on every keystroke

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={!renderError ? 'form-control' : 'form-control invalid'}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!renderError || <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
