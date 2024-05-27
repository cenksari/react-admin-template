import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Signin from '../pages/Members/Signin';

import Users from '../pages/Users/Users';
import Orders from '../pages/Orders/Orders';
import Account from '../pages/Members/Account';
import Signout from '../pages/Members/Signout';
import Product from '../pages/Product/Product';
import Settings from '../pages/Settings/Settings';
import Products from '../pages/Products/Products';
import Comments from '../pages/Comments/Comments';
import Messages from '../pages/Messages/Messages';
import Dashboard from '../pages/Dashboard/Dashboard';
import Statistics from '../pages/Statistics/Statistics';
import Notifications from '../pages/Notifications/Notifications';

import useMember from '../hooks/useMember';

const Navigation = (): React.JSX.Element => {
  const { member } = useMember();
  
  return (
    <Routes>
      { member ? (
        <>
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/products' element={<Products />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/members/account' element={<Account />} />
          <Route path='/members/notifications' element={<Notifications />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Signin />} />
        </>
      )}
      <Route path='/members/signout' element={<Signout />} />
    </Routes>
  );
};

export default Navigation;
