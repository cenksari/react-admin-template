import React from 'react';

interface IProps {
  name: string;
  type: string;
  value: string;
  required?: boolean;
  maxLength: number;
  readOnly?: boolean;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type,
  value,
  required = false,
  maxLength,
  placeholder,
  readOnly = false,
  onChange = () => {},
}: IProps): React.JSX.Element => (
  <input
    type={type}
    name={name}
    id={name}
    className='input'
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
    value={value}
    autoComplete='off'
    onChange={onChange}
    readOnly={readOnly}
  />
);

export default Input;
