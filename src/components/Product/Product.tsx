import { Link } from 'react-router-dom';

// components
import Stock from './Stock';

// utils
import { formatCurrency } from '../../utils/Toolbox';

// interfaces
interface IProps {
  url: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  orders: number;
}

const Product: React.FC<IProps> = ({ url, name, price, image, stock, orders }) => (
  <Link to={url} className='product active-opacity'>
    <div className='cover image' style={{ backgroundImage: `url('${image}')` }} />
    <span className='name'>{name}</span>
    <span className='price'>{formatCurrency(price)}</span>
    <Stock quantity={stock} />
    <span className='orders'>{orders} orders</span>
  </Link>
);

export default Product;
