import React from 'react';

import { Link } from 'react-router-dom';

import Stock from './Stock';

import { formatCurrency } from '../../utils/Toolbox';

interface IProps {
  url: string;
  name: string;
  price: number;
  image: string;
  stock: number;
}

const Product = ({ url, name, price, image, stock}: IProps): React.JSX.Element => (
  <Link to={url} className='product'>
    <div className='cover image' style={{ backgroundImage: `url('${image}')` }} />
    <span className='name'>{name}</span>
    <span className='price'>{formatCurrency(price)}</span>
    <Stock quantity={stock} />
  </Link>
);

export default Product;
