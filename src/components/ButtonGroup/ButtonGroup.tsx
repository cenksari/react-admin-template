// components
import ButtonGroupItem from './ButtonGroupItem';

// interfaces
interface IProps {
  items: {
    id: number;
    url: string;
    text: string;
    active?: boolean;
  }[];
}

const ButtonGroup: React.FC<IProps> = ({ items }) => (
  <ul className='button-group flex-inline no-select scroller-horizontal'>
    {items.map((item) => (
      <ButtonGroupItem key={item.id} url={item.url} text={item.text} active={item.active} />
    ))}
  </ul>
);

export default ButtonGroup;
