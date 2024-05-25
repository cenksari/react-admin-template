import React from 'react';

import { Link } from 'react-router-dom';

const Links = (): React.JSX.Element => (
  <div className='header-links flex flex-grow flex-gap'>
    <Link to='/orders'>Orders</Link>
    <Link to='/products'>Products</Link>
  </div>
);

export default Links;
