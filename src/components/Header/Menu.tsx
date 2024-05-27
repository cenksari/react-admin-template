import React from 'react';

import { useLocation } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

const Menu = (): React.JSX.Element => {
  const location = useLocation();

  const wrapperRef = React.useRef<any>();

  const [dropdown, setDropdown] = React.useState<boolean>(false);

  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <div ref={wrapperRef} className='header-dropdown'>
      <div className='header-menu flex flex-grow flex-v-center flex-space-between pointer no-select' onClick={() => setDropdown(!dropdown)}>
        <span className='value'>Dashboard</span>
        <span className='material-symbols-outlined'>expand_all</span>
      </div>
      {dropdown && (
        <Dropdown color='gray'>
          <DropdownItem url='/' text='Dashboard' active={splitLocation[1] === '' ? true : false} />
          <DropdownItem url='/users' text='Users' active={splitLocation[1] === 'users' ? true : false} />
          <DropdownItem url='/orders' text='Orders' active={splitLocation[1] === 'orders' ? true : false} />
          <DropdownItem url='/products' text='Products' active={splitLocation[1] === 'products' ? true : false} />
          <DropdownItem url='/messages' text='Messages' active={splitLocation[1] === 'messages' ? true : false} />
          <DropdownItem url='/comments' text='Comments' active={splitLocation[1] === 'comments' ? true : false} />
          <hr />
          <DropdownItem url='/settings' text='Settings' active={splitLocation[1] === 'settings' ? true : false} />
          <DropdownItem url='/settings/admins' text='Administrators' active={splitLocation[1] === 'admins' ? true : false} />
        </Dropdown>
      )}
    </div>
  );
};

export default Menu;
