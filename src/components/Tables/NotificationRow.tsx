import { useRef, useState } from 'react';

// hooks
import useClickOutside from '../../hooks/useClickOutside';

// components
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

// interfaces
interface IProps {
  id: number;
  date: string;
  status: string;
  message: string;
}

const NotificationRow: React.FC<IProps> = ({ id, date, status, message }) => {
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
        {status === 'unread' ? (
          <span className='notification blue' />
        ) : (
          <span className='notification gray' />
        )}
      </td>
      <td>{date}</td>
      <td>{message}</td>
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
            <DropdownItem
              icon='visibility'
              url={`/notification/read/${id}`}
              text={status === 'unread' ? 'Read' : 'Unread'}
            />
            <hr />
            <DropdownItem icon='delete' url={`/notification/delete/${id}`} text='Delete' />
          </Dropdown>
        )}
      </td>
    </tr>
  );
};

export default NotificationRow;
