import React from 'react';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  separator?: boolean;
  type: 'submit' | 'reset' | 'button';
}

const Button = ({ type, className = 'dark', text, leftIcon, rightIcon, separator = false }: IProps): React.JSX.Element => {
  return (
    <button type={type} className={`button ${className}`}>
      {leftIcon && (
        <>
          <div className='flex flex-v-center flex-h-center'>
            <span className='material-symbols-outlined left-icon'>{leftIcon}</span>
          </div>
          {separator && <span className='separator left'>|</span>}
        </>
      )}
      <em>{text}</em>
      {rightIcon && (
        <>
          {separator && <span className='separator right'>|</span>}
          <div className='flex flex-v-center flex-h-center'>
            <span className='material-symbols-outlined right-icon'>{rightIcon}</span>
          </div>
        </>
      )}
    </button>
  );
};

export default Button;
