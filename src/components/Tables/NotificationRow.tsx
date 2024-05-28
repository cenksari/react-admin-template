import React from 'react';

import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

interface IProps {
  id: number;
  date: string;
  status: string;
  message: string;
}

const NotificationRow = ({ id, date, status, message }: IProps): React.JSX.Element => {  
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
        {status === 'unread' ? <span className='notification blue' /> : <span className='notification gray' />}
      </td>
      <td>{date}</td>
      <td>{message}</td>
      <td ref={wrapperRef} className='flex flex-v-center flex-end flex-gap-small'>
        <span className='material-symbols-outlined pointer active-opacity' onClick={() => setDropdown(!dropdown)}>more_vert</span>
        {dropdown && (
          <Dropdown color='gray'>
            <DropdownItem icon='visibility' url={`/notification/read/${id}`} text={status === 'unread' ? 'Read' : 'Unread'} />
            <hr />
            <DropdownItem icon='delete' url={`/notification/delete/${id}`} text='Delete' />
          </Dropdown>
        )}
      </td>
    </tr>
  );
};

export default NotificationRow;
