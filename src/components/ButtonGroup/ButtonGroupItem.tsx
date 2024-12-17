import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  text: string;
  active?: boolean;
}

const ButtonGroupItem: React.FC<IProps> = ({ url, text, active = false }) => (
  <li className={active ? 'active' : ''}>
    <Link to={url}>{text}</Link>
  </li>
);

export default ButtonGroupItem;
