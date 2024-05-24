import React from 'react';

interface IProps {
  text: string;
}

const Button = ({ text }: IProps): React.JSX.Element => {
  return (
    <button type='button' className='button'>{text}</button>
  )
}

export default Button;
