import React from 'react';

import Badge from '../Badge/Badge';
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

interface IProps {
  id: number;
  name: string;
  email: string;
  image: string;
  country: string;
  status: boolean;
}

const UserRow = ({ id, name, email, image, country, status }: IProps): React.JSX.Element => {  
  const wrapperRef = React.useRef<any>();

  const [dropdown, setDropdown] = React.useState<boolean>(false);

  const [state, setState] = React.useState<boolean>(false);

  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.checked);
  };

  return (
    <tr>
      <td>
        <Checkbox name={`cb-${id}`} checked={state} onChange={handleCheckboxChange} />
      </td>
      <td>
        <div className='cover user-photo' style={{ backgroundImage: `url('${image}')` }} />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td className='center'>
        {status ? (<Badge text='Active' color='white' />) : (<Badge text='Passive' color='dark' />)}
      </td>
      <td ref={wrapperRef} className='flex flex-v-center flex-end flex-gap-small'>
        <span className='material-symbols-outlined pointer active-opacity' onClick={() => setDropdown(!dropdown)}>more_vert</span>
        {dropdown && (
          <Dropdown color='gray'>
            <DropdownItem icon='settings' url={`/user/edit/${id}`} text='Edit' />
            <DropdownItem icon='visibility' url={`/user/profile/${id}`} text='View' />
            <hr />
            <DropdownItem icon='delete' url={`/user/delete/${id}`} text='Delete' />
          </Dropdown>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
