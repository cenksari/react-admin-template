import React from 'react';

import Table from '../../components/Tables/Table';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import UserRow from '../../components/Tables/UserRow';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

const buttonGroup = [
  {
    id: 1,
    text: 'Register date',
    url: '/users?sort=register',
    active: true,
  },
  {
    id: 2,
    text: 'Last login date',
    url: '/users?sort=logindate',
    active: false,
  },
  {
    id: 3,
    text: 'Activation status',
    url: '/users?sort=activation',
    active: false,
  },
  {
    id: 4,
    text: 'Order count',
    url: '/users?sort=ordercount',
    active: false,
  },
];

const Users = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Users'>
        <form className='flex flex-gap' noValidate>
          <Input
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button text='Search' />
        </form>
      </Heading>

      <ButtonGroup items={buttonGroup} />

      <Spacer />

      <Table header={
        <tr>
          <th></th>
          <th></th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Country</th>
          <th className='center'>Status</th>
          <th></th>
        </tr>
      }>
        <UserRow id={1} name='Cenk SARI' email='cenk@cenksari.com' image='https://i.pravatar.cc/32?img=1' country='United Kingdom' status={true} />
        <UserRow id={2} name='Cenk SARI' email='cenk@cenksari.com' image='https://i.pravatar.cc/32?img=2' country='United Kingdom' status={false} />
        <UserRow id={3} name='Cenk SARI' email='cenk@cenksari.com' image='https://i.pravatar.cc/32?img=3' country='United Kingdom' status={true} />
        <UserRow id={4} name='Cenk SARI' email='cenk@cenksari.com' image='https://i.pravatar.cc/32?img=4' country='United Kingdom' status={false} />
      </Table>
    </Container>
  </Master>
);

export default Users;
