import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  text: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
}

const DropdownItem: React.FC<IProps> = ({ url, text, icon, active, onClick }) => (
  <Link
    className={
      active
        ? 'flex flex-gap-medium flex-v-center active'
        : 'flex flex-gap-medium flex-v-center passive active-opacity'
    }
    to={url}
    onClick={onClick}
  >
    {icon && <span className='material-symbols-outlined'>{icon}</span>}
    <em>{text}</em>
  </Link>
);

export default DropdownItem;
