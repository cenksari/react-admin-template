import { Routes, Route } from 'react-router-dom';

// pages
import Signin from '../pages/Members/Signin';
import Forgot from '../pages/Members/Forgot';

import Home from '../pages/Home/Home';
import Users from '../pages/Users/Users';
import Orders from '../pages/Orders/Orders';
import Account from '../pages/Members/Account';
import Signout from '../pages/Members/Signout';
import Product from '../pages/Product/Product';
import Message from '../pages/Message/Message';
import Settings from '../pages/Settings/Settings';
import Products from '../pages/Products/Products';
import Comments from '../pages/Comments/Comments';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';

const Navigation: React.FC = () => (
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/home' element={<Home />} />
    <Route path='/users' element={<Users />} />
    <Route path='/orders' element={<Orders />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/products' element={<Products />} />
    <Route path='/comments' element={<Comments />} />
    <Route path='/messages' element={<Messages />} />
    <Route path='/message/:id' element={<Message />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path='/members/account' element={<Account />} />
    <Route path='/members/notifications' element={<Notifications />} />
    <Route path='/forgot-password' element={<Forgot />} />
    <Route path='/members/signout' element={<Signout />} />
  </Routes>
);

export default Navigation;
