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
    url: '/messages',
    active: true,
  },
  {
    id: 2,
    text: 'Waiting',
    url: '/messages?filter=waiting',
    active: false,
  },
  {
    id: 3,
    text: 'Sorted',
    url: '/messages?filter=sorted',
    active: false,
  },
  {
    id: 4,
    text: 'Unsorted',
    url: '/messages?filter=unsorted',
    active: false,
  },
];

const Messages = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Messages'>
        <form className='flex flex-gap' noValidate>
          <Input
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button type='button' text='Search' />
        </form>
      </Heading>

      <ButtonGroup items={buttonGroup} />
    </Container>
  </Master>
);

export default Messages;
