import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  text: string;
  icon?: string;
  active?: boolean;
}

const DropdownItem: React.FC<IProps> = ({ url, text, icon, active }) => (
  <Link
    className={
      active === true
        ? 'flex flex-gap-medium flex-v-center active'
        : 'flex flex-gap-medium flex-v-center passive active-opacity'
    }
    to={url}
  >
    {icon && <span className='material-symbols-outlined'>{icon}</span>}
    <em>{text}</em>
  </Link>
);

export default DropdownItem;
