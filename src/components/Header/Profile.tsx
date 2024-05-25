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
    <div ref={wrapperRef} className='header-user flex flex-1 flex-end'>
      <div className='flex flex-h-center flex-v-center'>
        <Link to='/members/notifications' className='flex'>
          <span className='material-symbols-outlined'>notifications</span>
        </Link>
        <div className='user-photo cover pointer' style={{ backgroundImage: `url('${picture}')` }} />
        <div className='flex flex-v-center pointer' onClick={() => setDropdown(!dropdown)}>
          <strong>{name}</strong>
          <span className='material-symbols-outlined'>keyboard_arrow_down</span>
        </div>
      </div>
      {dropdown && (
        <Dropdown color='gray'>
          <DropdownItem url='/members/account' text='Account' />
          <DropdownItem url='/members/notifications' text='Notifications' />
          <hr />
          <DropdownItem url='/members/signout' text='Sign out' />
        </Dropdown>
      )}
    </div>
  );
};

export default Profile;
