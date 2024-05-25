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
    text: 'Default',
    url: '/products',
    active: true,
  },
  {
    id: 2,
    text: 'Creation date',
    url: '/products?sort=creationdate',
    active: false,
  },
  {
    id: 3,
    text: 'Order count',
    url: '/products?sort=ordercount',
    active: false,
  },
  {
    id: 4,
    text: 'Out of stock',
    url: '/products?filter=outofstock',
    active: false,
  },
  {
    id: 5,
    text: 'Limited stock',
    url: '/products?filter=limitedstock',
    active: false,
  },
];

const Products = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Products'>
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

export default Products;
