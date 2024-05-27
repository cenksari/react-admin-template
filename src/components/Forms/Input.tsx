import React from 'react';

interface IProps {
  name: string;
  type: string;
  value: string;
  tabIndex: number;
  required: boolean;
  maxLength: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, type, value, tabIndex, required, maxLength, placeholder, onChange = () => {} }: IProps): React.JSX.Element => (
  <input type={type} name={name} id={name} className='input' placeholder={placeholder} required={required} maxLength={maxLength} tabIndex={tabIndex} value={value} autoComplete='off' onChange={onChange} />
);

export default Input;
