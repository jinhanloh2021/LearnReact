import React from 'react';

type Props = {
  enteredValue: string;
  valueInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueInputBlurHandler: (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => void;
  valueRenderError: boolean;
  label: string;
  errMessage: string;
};

export default function ValueInput({
  enteredValue,
  valueInputChangeHandler,
  valueInputBlurHandler,
  valueRenderError,
  label,
  errMessage,
}: Props) {
  return (
    <div
      className={!valueRenderError ? 'form-control' : 'form-control invalid'}
    >
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        id="name"
        onChange={valueInputChangeHandler}
        onBlur={valueInputBlurHandler}
        value={enteredValue}
      />
      {!valueRenderError || <p className="error-text">{errMessage}</p>}
    </div>
  );
}
