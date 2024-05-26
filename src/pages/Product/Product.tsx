import React from 'react';

import { useParams } from 'react-router-dom';

import Box from '../../components/Containers/Box';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Table from '../../components/Tables/Table';
import Spacer from '../../components/Spacer/Spacer';
import Master from '../../components/Layout/Master';
import OrderRow from '../../components/Tables/OrderRow';
import BarChart from '../../components/Charts/BarChart';
import Heading from '../../components/Headings/Heading';
import AreaChart from '../../components/Charts/AreaChart';
import Container from '../../components/Containers/Container';
import BoxContainer from '../../components/Containers/BoxContainer';

import orders from '../../data/orders.json';
import products from '../../data/products.json';

import { formatCurrency } from '../../utils/Toolbox';

const series1 = [{
  name: 'Orders',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 4.4, 5.8, 8.5, 11.2],
}];

const series2 = [{
  name: 'Price',
  data: [7.3, 3.1, 4.0, 10.1, 8.0, 11.6, ],
}];

const series3 = [{
  name: 'Returns',
  data: [3.3, 4.1, 5.0, 4.1, 3.0, 1.6, ],
}];

const Product = (): React.JSX.Element => {
  const { id } = useParams();

  const [current, setCurrent] = React.useState<any>(null);

  React.useEffect(() => {
    const product = products.find((item) => item.id === Number(id));

    setCurrent(product);
  }, [id]);

  if (current === null) {
    return (
      <></>
    );
  }
  
  return (
    <Master>
      <Container>
        <Heading text='Product'>
          <form className='flex flex-gap' noValidate>
            <Input
              name='keyword'
              placeholder='Please enter keyword'
            />
            <Button type='button' text='Search' />
          </form>
        </Heading>

        <div className='product-info flex flex-gap'>
          <div className='flex-grow'>
            <h4>{current.name}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Price <strong>{formatCurrency(current.price)}</strong>, orders <strong>{current.orders}</strong>, stock <strong>{current.stock}</strong>, category <strong>{current.category}</strong>
            </p>

            <div className='product-buttons flex flex-gap'>
              <Button type='button' text='Go to live URL' />
              <Button type='button' text='Edit product' />
              <Button type='button' text='Disable product' />
            </div>
          </div>
          <div>
            <div className='cover product-image' style={{ backgroundImage: `url('${current.image}')` }} />
          </div>
        </div>

        <BoxContainer boxes={1}>
          <Box type='single' title='Product performance' icon='bar_chart'>
            <BarChart series={series1} />
          </Box>
        </BoxContainer>

        <Spacer />

        <h4>Latest orders</h4>

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
          {orders && orders.slice(0, 5).map((order) => (
            <OrderRow key={order.id} id={order.id} date={order.date} user={order.user} products={order.products} totalPrice={order.totalPrice} status={order.status} />
          ))}
        </Table>

        <Spacer />

        <BoxContainer boxes={2}>
          <Box type='multi' title='Price performance' icon='bar_chart'>
            <AreaChart series={series2} />
          </Box>
          <Box type='multi' title='Returns' icon='bar_chart'>
            <AreaChart series={series3} />
          </Box>
        </BoxContainer>
      </Container>
    </Master>
  );
};

export default Product;
