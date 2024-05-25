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
          <th className='center'>Activation</th>
          <th></th>
        </tr>
      }>
        <UserRow id={1} name='Cenk SARI' email='cenk@cenksari.com' image='https://i.pravatar.cc/32?img=1' country='United Kingdom' status={true} />
        <UserRow id={2} name='Richard Belmont' email='richard@belmont.net' image='https://i.pravatar.cc/32?img=2' country='Italy' status={true} />
        <UserRow id={3} name='John Bellevue' email='john@bellevue.net' image='https://i.pravatar.cc/32?img=3' country='United States' status={true} />
        <UserRow id={4} name='Charles Miller' email='charles@miller.com' image='https://i.pravatar.cc/32?img=4' country='Germany' status={false} />
        <UserRow id={5} name='Adrian Smith' email='adrian@smith.co.uk' image='https://i.pravatar.cc/32?img=5' country='United Kingdom' status={true} />
        <UserRow id={6} name='Melissa Friedman' email='melissa@friedman.co.uk' image='https://i.pravatar.cc/32?img=6' country='United Kingdom' status={false} />
        <UserRow id={7} name='Mike Brown' email='mike@brown.com.tr' image='https://i.pravatar.cc/32?img=7' country='Turkey' status={true} />
        <UserRow id={8} name='Eric Stanton' email='eric@stanton.info' image='https://i.pravatar.cc/32?img=8' country='France' status={true} />
        <UserRow id={9} name='James Williams' email='james@williams.co.uk' image='https://i.pravatar.cc/32?img=9' country='United Kingdom' status={true} />
        <UserRow id={10} name='Jordan Hill' email='jordan@hill.tech' image='https://i.pravatar.cc/32?img=10' country='Hungary' status={true} />
        <UserRow id={11} name='Billie Dafoe' email='billie@dafoe.org' image='https://i.pravatar.cc/32?img=11' country='Netherlands' status={true} />
        <UserRow id={12} name='Stuart Wilson' email='stuart@wilson.net' image='https://i.pravatar.cc/32?img=12' country='Brazil' status={false} />
        <UserRow id={13} name='Amit Gupta' email='amit@gupta.co.uk' image='https://i.pravatar.cc/32?img=13' country='United Kingdom' status={true} />
        <UserRow id={14} name='Steven Johnson' email='steven@johnson.ca' image='https://i.pravatar.cc/32?img=14' country='Canada' status={true} />
        <UserRow id={15} name='Mark Bird' email='mark@bird.org' image='https://i.pravatar.cc/32?img=15' country='United Kingdom' status={true} />
        <UserRow id={16} name='Kevin Grunt' email='kevin@grunt.net' image='https://i.pravatar.cc/32?img=16' country='France' status={false} />
      </Table>
    </Container>
  </Master>
);

export default Users;
