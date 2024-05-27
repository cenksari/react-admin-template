import React from 'react';

import Badge from '../Badge/Badge';
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

import useClickOutside from '../../hooks/useClickOutside';

import { formatCurrency } from '../../utils/Toolbox';

interface IProps {
  id: string;
  date: string;
  user: string;
  products: number;
  totalPrice: number;
  status: string;
}

const OrderRow = ({ id, date, user, products, totalPrice, status }: IProps): React.JSX.Element => {  
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
      <td>{id}</td>
      <td>{date}</td>
      <td>{user}</td>
      <td className='center'>{products}</td>
      <td className='center'>{formatCurrency(totalPrice)}</td>
      <td className='center'>
        <Badge text={status} color='white' />
      </td>
      <td ref={wrapperRef} className='flex flex-v-center flex-end flex-gap-small'>
        <span className='material-symbols-outlined pointer active-opacity' onClick={() => setDropdown(!dropdown)}>more_vert</span>
        {dropdown && (
          <Dropdown color='gray'>
            <DropdownItem icon='edit' url={`/user/edit/${id}`} text='Edit' />
            <DropdownItem icon='visibility' url={`/user/profile/${id}`} text='View' />
            <hr />
            <DropdownItem icon='delete' url={`/user/delete/${id}`} text='Delete' />
          </Dropdown>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
