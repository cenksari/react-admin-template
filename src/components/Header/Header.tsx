import React from 'react'

import { Link } from 'react-router-dom';

import Menu from './Menu';
import Profile from './Profile';
import Container from '../Containers/Container';

const Header = (): React.JSX.Element => {
  return (
    <header>
      <Container className='container flex flex-v-center flex-space-between'>
        <Menu />

        <div className='header-links flex flex-1'>
          <Link to='/'>Overview</Link>
          <Link to='/'>Subscribers</Link>
          <Link to='/'>Settings</Link>
        </div>

        <Profile name='Cenk' picture='https://i.pravatar.cc/60?img=60' />
      </Container>
    </header>
  );
};

export default Header;
