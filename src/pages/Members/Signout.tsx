import React from 'react';

import Master from '../../components/Layout/Master';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';

const Signout = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Sign out'>
        <p>&nbsp;</p>
      </Heading>
    </Container>
  </Master>
);

export default Signout;
