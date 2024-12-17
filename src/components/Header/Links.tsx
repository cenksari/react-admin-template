import { Link } from 'react-router-dom';

const Links: React.FC = () => (
  <div className='header-links flex flex-grow flex-gap'>
    <Link to='/orders' className='active-opacity'>
      Orders
    </Link>
    <Link to='/products' className='active-opacity'>
      Products
    </Link>
  </div>
);

export default Links;
