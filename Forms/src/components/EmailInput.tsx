import React from 'react';

type Props = {
  enteredEmail: string;
  emailInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailInputBlurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  emailRenderError: boolean;
};

export default function EmailInput({
  enteredEmail,
  emailInputChangeHandler,
  emailInputBlurHandler,
  emailRenderError,
}: Props) {
  return (
    <div
      className={!emailRenderError ? 'form-control' : 'form-control invalid'}
    >
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
      />
      {!emailRenderError || <p className="error-text">Email invalid.</p>}
    </div>
  );
}
