import React from 'react';

import Menu from './Menu';
import Links from './Links';
import Profile from './Profile';
import Container from '../Containers/Container';

import useMember from '../../hooks/useMember';

const Header = (): React.JSX.Element => {
  const { member } = useMember();

  if (member) {
    return (
      <header>
        <Container className='container flex flex-v-center flex-space-between'>
          <Menu />
          <Links />
          <Profile name={member.name} lastname={member.lastname} picture={member.picture} />
        </Container>
      </header>
    );
  }

  return <div />;
};

export default Header;
