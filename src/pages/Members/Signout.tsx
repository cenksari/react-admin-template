import { Link } from 'react-router-dom';

// components
import Single from '../../components/Layout/Single';
import Spacer from '../../components/Spacer/Spacer';
import ButtonLink from '../../components/Forms/ButtonLink';
import Container from '../../components/Containers/Container';

const Signout = (): JSX.Element => (
  <Single>
    <Container>
      <h1>Signed out</h1>
      <p>
        You have been successfully signed out.{' '}
        <Link to='/' className='active-opacity'>
          Click here
        </Link>{' '}
        to go to sign in page.
      </p>
      <Spacer />
      <div className='flex flex-h-center'>
        <ButtonLink text='Sign in again' url='/' />
      </div>
    </Container>
  </Single>
);

export default Signout;
