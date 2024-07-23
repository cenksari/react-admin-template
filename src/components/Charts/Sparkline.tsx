import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

// interfaces
interface IProps {
  data: number[];
}

const Sparkline = ({ data }: IProps): React.JSX.Element => (
  <Sparklines data={data} height={40}>
    <SparklinesLine style={{ strokeWidth: 2, stroke: '#222222', fill: 'none' }} />
  </Sparklines>
);

export default Sparkline;
