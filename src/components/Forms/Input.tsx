import React from 'react';

interface IProps {
  name: string;
  placeholder: string;
}

const Input = ({ name, placeholder }: IProps): React.JSX.Element => {
  return (
    <input type='text' name={name} id={name} className='input' placeholder={placeholder} autoComplete='off' />
  );
};

export default Input;
