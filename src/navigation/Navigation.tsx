import React from 'react';

import { Routes, Route } from 'react-router-dom';

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

const Navigation = (): React.JSX.Element => (
  <Routes>
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
    <Route path='/members/signout' element={<Signout />} />
    <Route path='/members/notifications' element={<Notifications />} />
  </Routes>
);

export default Navigation;
