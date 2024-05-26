import React from 'react';

interface IProps {
  type: string;
  text: string;
}

const Button = ({ type, text }: IProps): React.JSX.Element => (
  <button type={type === 'button' ? 'button' : 'submit'} className='button'>{text}</button>
);

export default Button;
