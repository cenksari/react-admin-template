import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
}

const ButtonLink: React.FC<IProps> = ({ url, className = 'dark', leftIcon, rightIcon, text }) => (
  <Link to={url} className={`button ${className}`}>
    {leftIcon && (
      <div className='flex flex-v-center flex-h-center'>
        <span className='material-symbols-outlined left-icon'>{leftIcon}</span>
      </div>
    )}
    <em>{text}</em>
    {rightIcon && (
      <div className='flex flex-v-center flex-h-center'>
        <span className='material-symbols-outlined right-icon'>{rightIcon}</span>
      </div>
    )}
  </Link>
);

export default ButtonLink;
