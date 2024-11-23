import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  text: string;
  active?: boolean;
}

const ButtonGroupItem = ({ url, text, active = false }: IProps): JSX.Element => (
  <li className={active ? 'active' : ''}>
    <Link to={url}>{text}</Link>
  </li>
);

export default ButtonGroupItem;
