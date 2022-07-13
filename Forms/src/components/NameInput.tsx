import React from 'react';

type Props = {
  enteredName: string;
  nameInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameInputBlurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  nameRenderError: boolean;
};

export default function NameInput({
  enteredName,
  nameInputChangeHandler,
  nameInputBlurHandler,
  nameRenderError,
}: Props) {

  return (
    <div className={!nameRenderError ? 'form-control' : 'form-control invalid'}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
      />
      {!nameRenderError || (
        <p className="error-text">Name must not be empty.</p>
      )}
    </div>
  );
}
