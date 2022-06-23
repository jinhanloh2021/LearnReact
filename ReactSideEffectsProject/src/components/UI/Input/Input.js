import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

//using props here so that input is reusable. If use context, then not reusable.
//ref argument is special, reserved. Must use React.forwardRef for ref to be valid.
export default React.forwardRef(function Input(props, ref) {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  //used with React.forwardRef, can pass references up to the parent.
  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${!props.isValid ? classes.invalid : ''}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur} //On blur is the opposite of focus. When user clicks out of text box.
        ref={inputRef}
      />
    </div>
  );
});
