import React from 'react';

import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import Table from '../../components/Tables/Table';
import NotificationRow from '../../components/Tables/NotificationRow';

import notifications from '../../data/notifications.json';

const Notifications = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Notifications'>
        <div className='flex flex-gap'>
          <Button type='button' text='Delete selected' />
          <Button separator type='button' text='Mark all as' rightIcon='expand_all' className='light' />
        </div>
      </Heading>

      <Table header={
        <tr>
          <th></th>
          <th></th>
          <th>Date</th>
          <th>Message</th>
          <th></th>
        </tr>
      }>
        {notifications && notifications.map((notification) => (
          <NotificationRow key={notification.id} id={notification.id} date={notification.date} message={notification.message} status={notification.status} />
        ))}
      </Table>
    </Container>
  </Master>
);

export default Notifications;
