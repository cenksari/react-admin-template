// components
import Menu from './Menu';
import Links from './Links';
import Profile from './Profile';
import Container from '../Containers/Container';

const Header = (): JSX.Element => (
  <header>
    <Container className='container flex flex-v-center flex-space-between'>
      <Menu />
      <Links />
      <Profile name='Cenk' lastname='SARI' picture='https://i.pravatar.cc/300?img=60' />
    </Container>
  </header>
);

export default Header;
