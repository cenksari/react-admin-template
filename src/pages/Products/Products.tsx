import React from 'react';

import Box from '../../components/Containers/Box';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Paging from '../../components/Paging/Paging';
import Product from '../../components/Product/Product';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import BoxContainer from '../../components/Containers/BoxContainer';

import products from '../../data/products.json';

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

      <BoxContainer boxes={4}>
        {products &&
          products.map((product) => (
            <Box type='multi' title={product.category} icon='category' key={product.id}>
              <div className='content'>
                <Product
                  url={`/product/${product.id}`}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  stock={product.stock}
                  orders={product.orders}
                />
              </div>
            </Box>
          ))}
      </BoxContainer>

      <Paging url='/products' pageSize={30} totalRows={150} currentPage={1} />
    </Container>
  </Master>
);

export default Products;
