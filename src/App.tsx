import React from 'react';

import ReactApexChart from 'react-apexcharts';

import { type ApexOptions } from 'apexcharts';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Box from './components/Containers/Box';
import Input from './components/Forms/Input';
import Button from './components/Forms/Button';
import Master from './components/Layout/Master';
import Product from './components/Product/Product';
import Heading from './components/Headings/Heading';
import Container from './components/Containers/Container';
import MessageLine from './components/Messages/MessageLine';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import BoxContainer from './components/Containers/BoxContainer';

const options: ApexOptions = {
  stroke: {
    curve: 'smooth',
  },
  fill: {
    type: 'solid',
  },
  chart: {
    type: 'bar',
    height: 'auto',
    toolbar: {
      show: false,
    },
    fontFamily: 'Open Sans',
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      dataLabels: {
        position: 'bottom',
      },
    },
  },
  tooltip: {
    enabled: true,
  },
  colors: ['#222222'],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: 'category',
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'bottom',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: number) {
        return val + "%";
      },
    },
  },
};

const series1 = [{
  name: 'Orders',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
}];

const series2 = [{
  name: 'Traffic',
  data: [7.3, 3.1, 4.0, 10.1, 8.0, 11.6, ],
}];

const App = (): React.JSX.Element => {
  return (
    <Master>
      <Container>
        <Heading text='Dashboard'>
          <Input
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button text='Search' />
        </Heading>

        <ButtonGroup />

        <BoxContainer boxes={4}>
          <Box type='multi' title='Orders' icon='shopping_cart'>
            <p className='data'>€ 12305</p>
            <p className='muted'>+11.5% from last month</p>
            <Sparklines data={[5, 10, 5, 20, 8, 15]} height={40}>
              <SparklinesLine style={{ strokeWidth: 2, stroke: "#222222", fill: "none" }} />
            </Sparklines>
          </Box>

          <Box type='multi' title='Subscribers' icon='subscriptions'>
            <p className='data'>1809</p>
            <p className='muted'>+64.5% from last month</p>
            <Sparklines data={[10, 3, 4, 10, 10, 20]} height={40}>
              <SparklinesLine style={{ strokeWidth: 2, stroke: "#222222", fill: "none" }} />
            </Sparklines>
          </Box>

          <Box type='multi' title='Traffic' icon='pie_chart'>
            <p className='data'>769</p>
            <p className='muted'>+52.6% from last month</p>
            <Sparklines data={[20, 3, 8, 10, 20, 0]} height={40}>
              <SparklinesLine style={{ strokeWidth: 2, stroke: "#222222", fill: "none" }} />
            </Sparklines>
          </Box>

          <Box type='multi' title='Comments' icon='reviews'>
            <p className='data'>214</p>
            <p className='muted'>+4.1% from last month</p>
            <Sparklines data={[30, 10, 5, 10, 8, 30]} height={40}>
              <SparklinesLine style={{ strokeWidth: 2, stroke: "#222222", fill: "none" }} />
            </Sparklines>
          </Box>
        </BoxContainer>

        <BoxContainer boxes={1}>
          <Box type='single' title='Orders per month' icon='bar_chart'>
            <ReactApexChart options={options} series={series1} type="bar" height={350} />
          </Box>
        </BoxContainer>

        <BoxContainer boxes={2}>
          <Box type='multi' title='Messages' icon='message'>
            <div className='content scroller'>
              <MessageLine from='Cenk' image='https://i.pravatar.cc/100?img=1' subject='Thank you' />
              <MessageLine from='Richard' image='https://i.pravatar.cc/100?img=2' subject='Complaint' />
              <MessageLine from='John' image='https://i.pravatar.cc/100?img=3' subject='Returns' />
              <MessageLine from='Melissa' image='https://i.pravatar.cc/100?img=4' subject='Complaint' />
              <MessageLine from='Brad' image='https://i.pravatar.cc/100?img=5' subject='Delivery' />
              <MessageLine from='James' image='https://i.pravatar.cc/100?img=6' subject='Guarantee' />
              <MessageLine from='Adrian' image='https://i.pravatar.cc/100?img=7' subject='Other' />
            </div>
          </Box>

          <Box type='multi' title='Traffic sources' icon='traffic'>
            <ReactApexChart options={options} series={series2} type="area" height={350} />
          </Box>
        </BoxContainer>

        <div className='spacing' />

        <Heading text='Top selling products'>
          <Input
            name='keyword'
            placeholder='Please enter keyword'
          />
          <Button text='Search' />
        </Heading>

        <BoxContainer boxes={4}>
          <Box type='multi' title='Shoes' icon='category'>
            <div className='content'>
              <Product
                name='Nike Air Max Alpha Trainer 5'
                price='€120'
                image='https://static.nike.com/a/images/t_default/0dbef9d2-e69b-4df8-b52f-4e679d20e486/air-max-alpha-trainer-5-workout-shoes-rdbbk2.png'
                stock={3}
              />
            </div>
          </Box>

          <Box type='multi' title='Electronics' icon='category'>
            <div className='content'>
              <Product
                name='Sony XZ75WL 4K Ultra HD HDR Smart TV'
                price='€1499'
                image='https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_X75WL_Primary-Image-1?$primaryshotPreset$&fmt=png-alpha&wid=515&hei=515&trf=trim'
                stock={20}
              />
            </div>
          </Box>

          <Box type='multi' title='Phones' icon='category'>
            <div className='content'>
              <Product
                name='Apple iPhone 15 Pro Max 256GB Titanium Black'
                price='€1200'
                image='https://ee.co.uk/medias/iphone-15-pro-max-natural-titanium-desktop-detail-1-WebP-Format-488?context=bWFzdGVyfHJvb3R8Mjc4NTh8aW1hZ2Uvd2VicHxzeXMtbWFzdGVyL3Jvb3QvaDQ1L2gyYi8xMDA3MzgwNDcwMTcyNi9pcGhvbmUtMTUtcHJvLW1heC1uYXR1cmFsLXRpdGFuaXVtLWRlc2t0b3AtZGV0YWlsLTFfV2ViUC1Gb3JtYXQtNDg4fGFkN2Q0YWUwMDQ2NmIxYzg0ZGJjYTY2NTUwM2RjZWI4ZjUxYmJmOTM5NjI4OTEyNTVmY2ZiMDExYTE5NTFmYzg'
                stock={0}
              />
            </div>
          </Box>

          <Box type='multi' title='Computers' icon='category'>
            <div className='content'>
              <Product
                name='Dell UltraSharp 40 Curved Thunderbolt Monitor'
                price='€1600'
                image='https://m.media-amazon.com/images/I/61xDLgFEJiL._AC_UF1000,1000_QL80_.jpg'
                stock={10}
              />
            </div>
          </Box>
        </BoxContainer>
      </Container>
    </Master>
  );
};

export default App;
