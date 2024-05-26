import React from 'react';

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

import { formatCurrency } from '../../utils/Toolbox';

const series1 = [{
  name: 'Orders',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
}];

const series2 = [{
  name: 'Traffic',
  data: [7.3, 3.1, 4.0, 10.1, 8.0, 11.6, ],
}];

const buttonGroup = [
  {
    id: 1,
    text: 'Overview',
    url: '/',
    active: true,
  },
  {
    id: 2,
    text: 'Focused',
    url: '/dashboard/focused',
    active: false,
  },
  {
    id: 3,
    text: 'Detailed',
    url: '/dashboard/detailed',
    active: false,
  },
  {
    id: 4,
    text: 'Financial',
    url: '/dashboard/financial',
    active: false,
  },
];

const Dashboard = (): React.JSX.Element => (
  <Master>
    <Container>
      <Heading text='Dashboard'>
        <form className='flex flex-gap' noValidate>
          <Input
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button text='Search' />
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
          <div className='content scroller'>
            <MessageLine id='1' from='Cenk' image='https://i.pravatar.cc/100?img=1' subject='Thank you' />
            <MessageLine id='2' from='Richard' image='https://i.pravatar.cc/100?img=2' subject='Complaint' />
            <MessageLine id='3' from='John' image='https://i.pravatar.cc/100?img=3' subject='Returns' />
            <MessageLine id='4' from='Melissa' image='https://i.pravatar.cc/100?img=4' subject='Complaint' />
            <MessageLine id='5' from='Brad' image='https://i.pravatar.cc/100?img=5' subject='Delivery' />
            <MessageLine id='6' from='James' image='https://i.pravatar.cc/100?img=6' subject='Guarantee' />
            <MessageLine id='7' from='Adrian' image='https://i.pravatar.cc/100?img=7' subject='Other' />
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
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button text='Search' />
        </form>
      </Heading>

      <BoxContainer boxes={4}>
        <Box type='multi' title='Shoes' icon='category'>
          <div className='content'>
            <Product
              url='/product/1'
              name='Nike Air Max Alpha Trainer 5'
              price={120}
              image='https://static.nike.com/a/images/t_default/0dbef9d2-e69b-4df8-b52f-4e679d20e486/air-max-alpha-trainer-5-workout-shoes-rdbbk2.png'
              stock={3}
            />
          </div>
        </Box>

        <Box type='multi' title='Electronics' icon='category'>
          <div className='content'>
            <Product
              url='/product/2'
              name='Sony XZ75WL 4K Ultra HD HDR Smart TV'
              price={1499}
              image='https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_X75WL_Primary-Image-1?$primaryshotPreset$&fmt=png-alpha&wid=515&hei=515&trf=trim'
              stock={20}
            />
          </div>
        </Box>

        <Box type='multi' title='Phones' icon='category'>
          <div className='content'>
            <Product
              url='/product/3'
              name='Apple iPhone 15 Pro Max 256GB Titanium Black'
              price={1200}
              image='https://ee.co.uk/medias/iphone-15-pro-max-natural-titanium-desktop-detail-1-WebP-Format-488?context=bWFzdGVyfHJvb3R8Mjc4NTh8aW1hZ2Uvd2VicHxzeXMtbWFzdGVyL3Jvb3QvaDQ1L2gyYi8xMDA3MzgwNDcwMTcyNi9pcGhvbmUtMTUtcHJvLW1heC1uYXR1cmFsLXRpdGFuaXVtLWRlc2t0b3AtZGV0YWlsLTFfV2ViUC1Gb3JtYXQtNDg4fGFkN2Q0YWUwMDQ2NmIxYzg0ZGJjYTY2NTUwM2RjZWI4ZjUxYmJmOTM5NjI4OTEyNTVmY2ZiMDExYTE5NTFmYzg'
              stock={0}
            />
          </div>
        </Box>

        <Box type='multi' title='Computers' icon='category'>
          <div className='content'>
            <Product
              url='/product/4'
              name='Dell UltraSharp 40 Curved Thunderbolt Monitor'
              price={1600}
              image='https://m.media-amazon.com/images/I/61xDLgFEJiL._AC_UF1000,1000_QL80_.jpg'
              stock={10}
            />
          </div>
        </Box>
      </BoxContainer>
    </Container>
  </Master>
);

export default Dashboard;
