import { useRef, useState } from 'react';

// hooks
import useClickOutside from '../../hooks/useClickOutside';

// components
import Badge from '../Badge/Badge';
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

// interfaces
interface IProps {
  id: number;
  name: string;
  email: string;
  image: string;
  country: string;
  status: boolean;
}

const UserRow = ({ id, name, email, image, country, status }: IProps): JSX.Element => {
  const wrapperRef = useRef<HTMLTableCellElement>(null);

  const [state, setState] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  /**
   * Sets the dropdown state to false when clicked outside the wrapperRef element.
   */
  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  /**
   * Handles the change event of the checkbox.
   * Updates the state based on the checkbox's checked property.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
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
        {status ? <Badge text='Active' color='white' /> : <Badge text='Passive' color='dark' />}
      </td>
      <td ref={wrapperRef} className='flex flex-v-center flex-end flex-gap-small'>
        <span
          tabIndex={0}
          role='button'
          onKeyDown={() => {}}
          className='material-symbols-outlined pointer active-opacity'
          onClick={() => setDropdown(!dropdown)}
        >
          more_vert
        </span>
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
