// components
import Box from '../../components/Containers/Box';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Product from '../../components/Product/Product';
import Heading from '../../components/Headings/Heading';
import BarChart from '../../components/Charts/BarChart';
import AreaChart from '../../components/Charts/AreaChart';
import Sparkline from '../../components/Charts/Sparkline';
import Container from '../../components/Containers/Container';
import MessageLine from '../../components/Messages/MessageLine';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import BoxContainer from '../../components/Containers/BoxContainer';

// utils
import { formatCurrency } from '../../utils/Toolbox';

// data
import messages from '../../data/messages.json';
import products from '../../data/products.json';

// variables
const series1 = [
  {
    name: 'Orders',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
  },
];

const series2 = [
  {
    name: 'Traffic',
    data: [7.3, 3.1, 4.0, 10.1, 8.0, 11.6],
  },
];

const buttonGroup = [
  {
    id: 1,
    text: 'Overview',
    url: '/home',
    active: true,
  },
  {
    id: 2,
    text: 'Focused',
    url: '/home/focused',
    active: false,
  },
  {
    id: 3,
    text: 'Detailed',
    url: '/home/detailed',
    active: false,
  },
  {
    id: 4,
    text: 'Financial',
    url: '/home/financial',
    active: false,
  },
];

const Home: React.FC = () => (
  <Master>
    <Container>
      <Heading text='Dashboard'>
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

      <BoxContainer boxes={4}>
        <Box type='multi' title='Orders' icon='shopping_cart'>
          <p className='data'>{formatCurrency(12305)}</p>
          <p className='muted'>+11.5% from last month</p>
          <Sparkline data={[5, 10, 5, 20, 8, 15]} />
        </Box>

        <Box type='multi' title='Users' icon='subscriptions'>
          <p className='data'>1809</p>
          <p className='muted'>+64.5% from last month</p>
          <Sparkline data={[10, 3, 4, 10, 10, 20]} />
        </Box>

        <Box type='multi' title='Traffic' icon='pie_chart'>
          <p className='data'>769</p>
          <p className='muted'>+52.6% from last month</p>
          <Sparkline data={[20, 3, 8, 10, 20, 0]} />
        </Box>

        <Box type='multi' title='Comments' icon='reviews'>
          <p className='data'>214</p>
          <p className='muted'>+4.1% from last month</p>
          <Sparkline data={[30, 10, 5, 10, 8, 30]} />
        </Box>
      </BoxContainer>

      <BoxContainer boxes={1}>
        <Box type='single' title='Orders per month' icon='bar_chart'>
          <BarChart series={series1} />
        </Box>
      </BoxContainer>

      <BoxContainer boxes={2}>
        <Box type='multi' title='Messages' icon='message'>
          <div className='content scroller scroller-vertical'>
            {messages &&
              messages.map((message) => (
                <MessageLine
                  key={message.id}
                  id={message.id.toString()}
                  from={message.name}
                  image={message.image}
                  subject={message.subject}
                />
              ))}
          </div>
        </Box>

        <Box type='multi' title='Traffic sources' icon='traffic'>
          <AreaChart series={series2} />
        </Box>
      </BoxContainer>

      <Spacer />

      <Heading text='Top selling products'>
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

      <BoxContainer boxes={4}>
        {products &&
          products.slice(0, 4).map((product) => (
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
    </Container>
  </Master>
);

export default Home;
