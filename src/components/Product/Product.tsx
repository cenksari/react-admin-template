import React from 'react';

import { Link } from 'react-router-dom';

import Stock from './Stock';

interface IProps {
  name: string;
  price: string;
  image: string;
  stock: number;
}

const Product = ({ name, price, image, stock}: IProps): React.JSX.Element => {
  return (
    <Link to='/' className='product'>
      <div className='cover image' style={{ backgroundImage: `url('${image}')` }} />
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <Stock quantity={stock} />
    </Link>
  );
};

export default Product;
