import React from 'react';

interface IProps {
  rows: number;
  name: string;
  value: string;
  tabIndex: number;
  required: boolean;
  maxLength: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({ rows, name, value, tabIndex, required, maxLength, placeholder, onChange = () => {} }: IProps): React.JSX.Element => (
  <textarea rows={rows} name={name} id={name} className='input' placeholder={placeholder} required={required} maxLength={maxLength} tabIndex={tabIndex} value={value} autoComplete='off' onChange={onChange} />
);

export default Input;