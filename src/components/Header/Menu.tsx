import { useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';

// hooks
import useClickOutside from '../../hooks/useClickOutside';

// components
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

const Menu: React.FC = () => {
  const location = useLocation();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [dropdown, setDropdown] = useState<boolean>(false);

  const menuItems = [
    { url: '/home', text: 'Dashboard' },
    { url: '/users', text: 'Users' },
    { url: '/orders', text: 'Orders' },
    { url: '/products', text: 'Products' },
    { url: '/messages', text: 'Messages' },
    { url: '/comments', text: 'Comments' },
    { url: '/settings', text: 'Settings' },
    { url: '/settings/admins', text: 'Administrators' },
  ];

  /**
   * Handles the click outside event to close the dropdown.
   */
  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  const [menuLabel, setMenuLabel] = useState<string>(() => {
    return menuItems.find((item) => item.url === pathname)?.text || 'Dashboard';
  });

  const handleMenuItemClick = (text: string) => {
    setMenuLabel(text);
    setDropdown(false);
  };

  return (
    <div ref={wrapperRef} className='header-dropdown'>
      <div
        tabIndex={0}
        role='button'
        onKeyDown={() => {}}
        className='header-menu flex flex-grow flex-v-center flex-space-between pointer no-select'
        onClick={() => setDropdown(!dropdown)}
      >
        <span className='value'>{menuLabel}</span>
        <span className='material-symbols-outlined'>expand_all</span>
      </div>
      {dropdown && (
        <Dropdown color='gray'>
          {menuItems.map((item) => (
            <DropdownItem
              key={item.url}
              url={item.url}
              text={item.text}
              active={splitLocation[1] === item.url.split('/')[1]}
              onClick={() => handleMenuItemClick(item.text)}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
};

export default Menu;
