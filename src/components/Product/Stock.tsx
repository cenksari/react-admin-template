// components
import Badge from '../Badge/Badge';

// interfaces
interface IProps {
  quantity: number;
}

const Stock: React.FC<IProps> = ({ quantity }) => {
  if (quantity === 0) {
    return <Badge icon='close' text='Out of stock' color='disabled' />;
  }

  if (quantity < 9) {
    return <Badge icon='warning' text='Critical stock' color='light' />;
  }

  return <Badge text={`${quantity} in stock`} color='dark' />;
};

export default Stock;
