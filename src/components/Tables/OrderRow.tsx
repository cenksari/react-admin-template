import { useRef, useState } from 'react';

// hooks
import useClickOutside from '../../hooks/useClickOutside';

// components
import Badge from '../Badge/Badge';
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';

// utils
import { formatCurrency } from '../../utils/Toolbox';

// interfaces
interface IProps {
  id: string;
  date: string;
  user: string;
  products: number;
  totalPrice: number;
  status: string;
}

const OrderRow: React.FC<IProps> = ({ id, date, user, products, totalPrice, status }) => {
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
      <td>{id}</td>
      <td>{date}</td>
      <td>{user}</td>
      <td className='center'>{products}</td>
      <td className='center'>{formatCurrency(totalPrice)}</td>
      <td className='center'>
        <Badge text={status} color='white' />
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
            <DropdownItem icon='settings' url={`/order/edit/${id}`} text='Edit' />
            <DropdownItem icon='visibility' url={`/order/profile/${id}`} text='View' />
          </Dropdown>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
