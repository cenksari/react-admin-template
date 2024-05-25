import React from 'react';

import Menu from './Menu';
import Links from './Links';
import Profile from './Profile';
import Container from '../Containers/Container';

const Header = (): React.JSX.Element => (
  <header>
    <Container className='container flex flex-v-center flex-space-between'>
      <Menu />
      <Links />
      <Profile name='Cenk' picture='https://i.pravatar.cc/60?img=60' />
    </Container>
  </header>
);

export default Header;
