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
    url: '/comments',
    active: true,
  },
  {
    id: 2,
    text: 'Waiting',
    url: '/comments?filter=waiting',
    active: false,
  },
  {
    id: 3,
    text: 'Published',
    url: '/comments?filter=published',
    active: false,
  },
  {
    id: 4,
    text: 'Unpublished',
    url: '/comments?filter=unpublished',
    active: false,
  },
];

const Comments = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Comments'>
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

export default Comments;
