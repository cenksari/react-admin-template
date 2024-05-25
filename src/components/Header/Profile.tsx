import React from 'react';

import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

interface IProps {
  name: string;
  picture: string;
}

const Profile = ({ name, picture }: IProps): React.JSX.Element => {
  const wrapperRef = React.useRef<any>();

  const [dropdown, setDropdown] = React.useState<boolean>(false);

  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  return (
    <div className='header-user flex flex-end'>
      <div className='flex flex-h-center flex-v-center flex-gap'>
        <Link to='/settings' className='flex'>
          <span className='material-symbols-outlined'>settings</span>
        </Link>
        <Link to='/members/notifications' className='flex'>
          <span className='material-symbols-outlined'>notifications</span>
        </Link>
        <div ref={wrapperRef} className='flex flex-v-center flex-gap-medium'>
          <Link to='/members/account'>
            <div className='user-photo cover' style={{ backgroundImage: `url('${picture}')` }} />
          </Link>
          <button className='flex flex-v-center pointer' onClick={() => setDropdown(!dropdown)}>
            <strong>{name}</strong>
            <span className='material-symbols-outlined'>keyboard_arrow_down</span>
          </button>
          {dropdown && (
            <Dropdown color='gray'>
              <DropdownItem url='/members/account' text='Account' />
              <DropdownItem url='/members/notifications' text='Notifications' />
              <hr />
              <DropdownItem url='/members/signout' text='Sign out' />
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
