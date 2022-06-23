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
};

export default function Input({ label, input }: Props) {
  return (
    <div className="input">
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}
