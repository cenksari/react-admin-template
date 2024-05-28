import React from 'react';

import Input from '../../components/Forms/Input';
import Table from '../../components/Tables/Table';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Paging from '../../components/Paging/Paging';
import OrderRow from '../../components/Tables/OrderRow';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

import orders from '../../data/orders.json';

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
    text: 'Cancelled',
    url: '/orders?filter=cancelled',
    active: false,
  },
];

const Orders = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Orders'>
        <form className='flex flex-gap' noValidate>
          <Input
            required
            name='keyword'
            type='text'
            value=''
            tabIndex={0}
            maxLength={64}
            onChange={() => {}}
            placeholder='Please enter keyword'
          />
          <Button type='button' text='Search' rightIcon='search' />
        </form>
      </Heading>

      <ButtonGroup items={buttonGroup} />

      <Spacer />

      <Table header={
        <tr>
          <th></th>
          <th>ID</th>
          <th>Date</th>
          <th>User</th>
          <th className='center'>Products</th>
          <th className='center'>Total price</th>
          <th className='center'>Status</th>
          <th></th>
        </tr>
      }>
        {orders && orders.map((order) => (
          <OrderRow key={order.id} id={order.id} date={order.date} user={order.user} products={order.products} totalPrice={order.totalPrice} status={order.status} />
        ))}
      </Table>

      <Paging url='/orders' pageSize={30} totalRows={150} currentPage={1} />
    </Container>
  </Master>
);

export default Orders;
