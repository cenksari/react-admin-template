import React from 'react'

import ButtonGroupItem from './ButtonGroupItem';

const ButtonGroup = (): React.JSX.Element => {
  return (
    <ul className='button-group flex-inline no-select'>
      <ButtonGroupItem text='Overview' active />
      <ButtonGroupItem text='Audience' />
      <ButtonGroupItem text='Messages' />
      <ButtonGroupItem text='Engagement' />
    </ul>
  );
};

export default ButtonGroup;
