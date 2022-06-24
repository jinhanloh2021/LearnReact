import React from 'react';
import './input.scss';

type Props = {
  label: string;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
  // ref: React.MutableRefObject<null>;
};

//forwardRef with Typescript is an absolute PAIN. Don't forget this.
//Must state the element type we are referencing, and provide the props parameter
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, input }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="input">
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  }
);

export default Input;
