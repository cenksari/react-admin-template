import React from 'react';

import { Link } from 'react-router-dom';

import Checkbox from '../Forms/Checkbox';

interface IProps {
  id: string;
  from: string;
  image: string;
  subject: string;
}

const MessageLine = ({ id, from, image, subject }: IProps): React.JSX.Element => {
  const [state, setState] = React.useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.checked);
  };

  return (
    <div className='message flex flex-gap flex-v-center flex-space-between'>
    <div>
      <Checkbox name={`cb-${id}`} checked={state} onChange={handleCheckboxChange} />
    </div>
    <div>
      <div className='cover user-photo no-margin' style={{ backgroundImage: `url('${image}')` }} />
    </div>
    <div className='flex flex-v-center flex-grow'>
      <Link to={`/message/${id}`}>{subject}</Link>
      <span className='material-symbols-outlined from'>people</span>
      <strong>{from}</strong>
    </div>
    <div className='flex flex-gap'>
      <button type='button' className='pointer'>
        <span className='material-symbols-outlined'>forward</span>
      </button>
      <button type='button' className='pointer'>
        <span className='material-symbols-outlined'>delete</span>
      </button>
    </div>
  </div>
  );
};

export default MessageLine;
