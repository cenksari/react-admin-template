import { useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';

// hooks
import useClickOutside from '../../hooks/useClickOutside';

// components
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

const Menu = (): JSX.Element => {
  const location = useLocation();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [dropdown, setDropdown] = useState<boolean>(false);

  /**
   * Handles the click outside event to close the dropdown.
   */
  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <div ref={wrapperRef} className='header-dropdown'>
      <div
        tabIndex={0}
        role='button'
        onKeyDown={() => {}}
        className='header-menu flex flex-grow flex-v-center flex-space-between pointer no-select'
        onClick={() => setDropdown(!dropdown)}
      >
        <span className='value'>Dashboard</span>
        <span className='material-symbols-outlined'>expand_all</span>
      </div>
      {dropdown && (
        <Dropdown color='gray'>
          <DropdownItem url='/home' text='Dashboard' active={splitLocation[1] === 'home'} />
          <DropdownItem url='/users' text='Users' active={splitLocation[1] === 'users'} />
          <DropdownItem url='/orders' text='Orders' active={splitLocation[1] === 'orders'} />
          <DropdownItem url='/products' text='Products' active={splitLocation[1] === 'products'} />
          <DropdownItem url='/messages' text='Messages' active={splitLocation[1] === 'messages'} />
          <DropdownItem url='/comments' text='Comments' active={splitLocation[1] === 'comments'} />
          <hr />
          <DropdownItem url='/settings' text='Settings' active={splitLocation[1] === 'settings'} />
          <DropdownItem
            url='/settings/admins'
            text='Administrators'
            active={splitLocation[1] === 'admins'}
          />
        </Dropdown>
      )}
    </div>
  );
};

export default Menu;
