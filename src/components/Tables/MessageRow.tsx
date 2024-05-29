import React from 'react';

import { Link } from 'react-router-dom';

import Badge from '../Badge/Badge';
import Checkbox from '../Forms/Checkbox';

interface IProps {
  id: number;
  name: string;
  image: string;
  status: string;
  subject: string;
  attachments: boolean;
}

const MessageRow = ({ id, name, image, subject, status, attachments }: IProps): React.JSX.Element => {  
  const [state, setState] = React.useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.checked);
  };

  return (
    <tr>
      <td>
        <Checkbox name={`cb-${id}`} checked={state} onChange={handleCheckboxChange} />
      </td>
      <td>
        {attachments && <span className='material-symbols-outlined'>attach_file</span>}
      </td>
      <td>
        <div className='cover user-photo' style={{ backgroundImage: `url('${image}')` }} />
      </td>
      <td>{name}</td>
      <td>
        <Link to={`/message/${id}`}>{subject}</Link>
      </td>
      <td className='center'>
        <Badge text={status} color='white' />
      </td>
      <td className='flex flex-v-center flex-end flex-gap'>
        <button type='button' className='pointer active-opacity'>
          <span className='material-symbols-outlined'>reply</span>
        </button>
        <button type='button' className='pointer active-opacity'>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </td>
    </tr>
  );
};

export default MessageRow;
