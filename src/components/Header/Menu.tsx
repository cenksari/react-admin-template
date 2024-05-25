import React from 'react';

import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

const Menu = (): React.JSX.Element => {
  const wrapperRef = React.useRef<any>();

  const [dropdown, setDropdown] = React.useState<boolean>(false);

  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  return (
    <div ref={wrapperRef} className='header-dropdown'>
      <div className='header-menu flex flex-1 flex-v-center flex-space-between pointer no-select' onClick={() => setDropdown(!dropdown)}>
        <span className='value'>Dashboard</span>
        <span className='material-symbols-outlined'>expand_all</span>
      </div>
      {dropdown && (
        <Dropdown color='gray'>
          <DropdownItem url='/' text='Dashboard' active />
          <DropdownItem url='/users' text='Users' />
          <DropdownItem url='/orders' text='Orders' />
          <DropdownItem url='/traffic' text='Traffic' />
          <DropdownItem url='/products' text='Products' />
          <DropdownItem url='/messages' text='Messages' />
          <DropdownItem url='/comments' text='Comments' />
          <hr />
          <DropdownItem url='/settings' text='Settings' />
        </Dropdown>
      )}
    </div>
  );
};

export default Menu;
