import React from 'react';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'submit' | 'reset' | 'button';
}

const Button = ({ type, text }: IProps): React.JSX.Element => {
  return (
    <button type={type} className='button'>{text}</button>
  );
};

export default Button;
