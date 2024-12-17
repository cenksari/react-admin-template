import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// types
import { type IProduct } from '../../types/types';

// components
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
import Sparkline from '../../components/Charts/Sparkline';
import ButtonLink from '../../components/Forms/ButtonLink';
import Container from '../../components/Containers/Container';
import BoxContainer from '../../components/Containers/BoxContainer';

// data
import orders from '../../data/orders.json';
import products from '../../data/products.json';

// utils
import { formatCurrency } from '../../utils/Toolbox';

// variables
const series1 = [
  {
    name: 'Orders',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 4.4, 5.8, 8.5, 11.2],
  },
];

const series2 = [
  {
    name: 'Price',
    data: [7.3, 3.1, 4.0, 10.1, 8.0, 11.6],
  },
];

const series3 = [
  {
    name: 'Returns',
    data: [3.3, 4.1, 5.0, 4.1, 3.0, 1.6],
  },
];

const Product: React.FC = () => {
  const { id } = useParams();

  const [current, setCurrent] = useState<IProduct | undefined>();

  useEffect(() => {
    const product = products.find((item) => item.id === Number(id));

    setCurrent(product);
  }, [id]);

  if (current === undefined) {
    return null;
  }

  return (
    <Master>
      <Container>
        <Heading text='Product'>
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

        <div className='product-info flex flex-gap'>
          <div className='flex-grow'>
            <h4>{current.name}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Price <strong>{formatCurrency(current.price)}</strong>, orders{' '}
              <strong>{current.orders}</strong>, stock <strong>{current.stock}</strong>, category{' '}
              <strong>{current.category}</strong>
            </p>

            <div className='product-buttons flex flex-gap-medium'>
              <ButtonLink text='Edit product' url='/' />
              <ButtonLink text='Visit live url' url='/' />
            </div>
          </div>
          <div>
            <div
              className='cover product-image'
              style={{ backgroundImage: `url('${current.image}')` }}
            />
          </div>
        </div>

        <BoxContainer boxes={1}>
          <Box type='single' title='Product performance' icon='bar_chart'>
            <BarChart series={series1} />
          </Box>
        </BoxContainer>

        <Spacer />

        <h4>Latest orders</h4>

        <Table
          header={
            <tr>
              <th />
              <th>ID</th>
              <th>Date</th>
              <th>User</th>
              <th className='center'>Products</th>
              <th className='center'>Total price</th>
              <th className='center'>Status</th>
              <th />
            </tr>
          }
        >
          {orders &&
            orders
              .slice(0, 5)
              .map((order) => (
                <OrderRow
                  key={order.id}
                  id={order.id}
                  date={order.date}
                  user={order.user}
                  products={order.products}
                  totalPrice={order.totalPrice}
                  status={order.status}
                />
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

        <BoxContainer boxes={4}>
          <Box type='multi' title='Revenue' icon='shopping_cart'>
            <p className='data'>{formatCurrency(151981)}</p>
            <p className='muted'>+11.5% from last month</p>
            <Sparkline data={[5, 10, 5, 20, 8, 15]} />
          </Box>

          <Box type='multi' title='Likes' icon='favorite'>
            <p className='data'>268</p>
            <p className='muted'>+64.5% from last month</p>
            <Sparkline data={[10, 3, 4, 10, 10, 20]} />
          </Box>

          <Box type='multi' title='Traffic' icon='pie_chart'>
            <p className='data'>110</p>
            <p className='muted'>+52.6% from last month</p>
            <Sparkline data={[20, 3, 8, 10, 20, 0]} />
          </Box>

          <Box type='multi' title='Comments' icon='reviews'>
            <p className='data'>98</p>
            <p className='muted'>+4.1% from last month</p>
            <Sparkline data={[30, 10, 5, 10, 8, 30]} />
          </Box>
        </BoxContainer>
      </Container>
    </Master>
  );
};

export default Product;
