import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

interface IProps {
  name: string;
  lastname: string;
  picture?: string;
}

const Profile = ({ name, lastname, picture }: IProps): React.JSX.Element => {
  const location = useLocation();

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [dropdown, setDropdown] = React.useState<boolean>(false);

  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  const { pathname } = location;

  return (
    <div className='header-user flex flex-end'>
      <div className='flex flex-h-center flex-v-center flex-gap'>
        <Link to='/settings' className='flex'>
          <span className='material-symbols-outlined icon active-opacity'>settings</span>
        </Link>
        <div className='flex relative'>
          <Link to='/members/notifications' className='flex'>
            <span className='material-symbols-outlined icon active-opacity'>notifications</span>
            <em className='notification red absolute flex flex-v-center flex-h-center no-select'>
              3
            </em>
          </Link>
        </div>
        <div ref={wrapperRef} className='flex flex-v-center flex-gap-medium'>
          <Link to='/members/account'>
            {picture ? (
              <div
                className='user-photo cover active-opacity'
                style={{ backgroundImage: `url('${picture}')` }}
              />
            ) : (
              <div className='user-photo flex flex-v-center flex-h-center active-opacity'>
                <em>
                  {name.substring(0, 1).toUpperCase()}
                  {lastname.substring(0, 1).toUpperCase()}
                </em>
              </div>
            )}
          </Link>
          <button
            type='button'
            className='flex flex-v-center flex-gap-small pointer active-opacity'
            onClick={() => setDropdown(!dropdown)}
          >
            <strong>{name}</strong>
            <span className='material-symbols-outlined dropdown-arrow'>
              {dropdown ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {dropdown && (
            <Dropdown color='gray'>
              <DropdownItem
                url='/members/account'
                text='Account'
                active={pathname === '/members/account'}
              />
              <DropdownItem
                url='/members/notifications'
                text='Notifications'
                active={pathname === '/members/notifications'}
              />
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
