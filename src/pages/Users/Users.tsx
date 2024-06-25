import React from 'react';

import Table from '../../components/Tables/Table';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Paging from '../../components/Paging/Paging';
import UserRow from '../../components/Tables/UserRow';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

import users from '../../data/users.json';

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
            required
            name='keyword'
            type='text'
            value=''
            maxLength={64}
            onChange={() => {}}
            placeholder='Please enter keyword'
          />
          <Button type='button' text='Search' rightIcon='search' />
        </form>
      </Heading>

      <ButtonGroup items={buttonGroup} />

      <Spacer />

      <Table
        header={
          <tr>
            <th />
            <th />
            <th>Name</th>
            <th>E-mail</th>
            <th>Country</th>
            <th className='center'>Activation</th>
            <th />
          </tr>
        }
      >
        {users &&
          users.map((user) => (
            <UserRow
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              image={user.image}
              country={user.country}
              status={user.status}
            />
          ))}
      </Table>

      <Paging url='/users' pageSize={30} totalRows={150} currentPage={1} />
    </Container>
  </Master>
);

export default Users;
