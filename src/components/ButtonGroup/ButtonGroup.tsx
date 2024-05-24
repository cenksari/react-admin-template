import React from 'react';

import ButtonGroupItem from './ButtonGroupItem';

const ButtonGroup = (): React.JSX.Element => {
  return (
    <ul className='button-group flex-inline no-select'>
      <ButtonGroupItem text='Overview' active />
      <ButtonGroupItem text='Focused' />
      <ButtonGroupItem text='Detailed' />
      <ButtonGroupItem text='Financial' />
    </ul>
  );
};

export default ButtonGroup;
