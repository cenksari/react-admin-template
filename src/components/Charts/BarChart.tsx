import ReactApexChart from 'react-apexcharts';

import { type ApexOptions } from 'apexcharts';

// variables
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
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
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
      formatter(val: number) {
        return `${val}%`;
      },
    },
  },
};

// interfaces
interface IProps {
  series: {
    name: string;
    data: number[];
  }[];
}

const BarChart = ({ series }: IProps): JSX.Element => (
  <ReactApexChart options={options} series={series} type='bar' height={350} />
);

export default BarChart;
