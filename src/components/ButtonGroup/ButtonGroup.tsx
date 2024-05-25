import React from 'react';

import ButtonGroupItem from './ButtonGroupItem';

const ButtonGroup = (): React.JSX.Element => {
  return (
    <ul className='button-group flex-inline no-select'>
      <ButtonGroupItem url='/' text='Overview' active />
      <ButtonGroupItem url='/focused' text='Focused' />
      <ButtonGroupItem url='/detailed' text='Detailed' />
      <ButtonGroupItem url='/financial' text='Financial' />
    </ul>
  );
};

export default ButtonGroup;
