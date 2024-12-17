// interfaces
interface IProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  disabled?: boolean;
  separator?: boolean;
  type: 'submit' | 'reset' | 'button';
}

const Button: React.FC<IProps> = ({
  type,
  className = 'dark',
  text,
  leftIcon,
  rightIcon,
  disabled = false,
  separator = false,
}) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`button ${className}`}
    disabled={disabled}
  >
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

export default Button;
