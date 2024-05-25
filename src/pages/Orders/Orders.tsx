import React from 'react';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

const buttonGroup = [
  {
    id: 1,
    text: 'All',
    url: '/orders',
    active: true,
  },
  {
    id: 2,
    text: 'Waiting',
    url: '/orders?filter=waiting',
    active: false,
  },
  {
    id: 3,
    text: 'Preparing',
    url: '/orders?filter=preparing',
    active: false,
  },
  {
    id: 4,
    text: 'Dispatched',
    url: '/orders?filter=dispatched',
    active: false,
  },
  {
    id: 5,
    text: 'Canceled',
    url: '/orders?filter=canceled',
    active: false,
  },
];

const Orders = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Orders'>
        <form className='flex flex-gap' noValidate>
          <Input
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button text='Search' />
        </form>
      </Heading>

      <ButtonGroup items={buttonGroup} />
    </Container>
  </Master>
);

export default Orders;
