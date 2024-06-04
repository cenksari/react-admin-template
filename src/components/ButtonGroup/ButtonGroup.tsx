import React from 'react';

import ButtonGroupItem from './ButtonGroupItem';

interface IProps {
  items: {
    id: number;
    url: string;
    text: string;
    active?: boolean;
  }[];
}

const ButtonGroup = ({ items }: IProps): React.JSX.Element => (
  <ul className='button-group flex-inline no-select scroller-horizontal'>
    {items.map((item) => (
      <ButtonGroupItem key={item.id} url={item.url} text={item.text} active={item.active} />
    ))}
  </ul>
);

export default ButtonGroup;
