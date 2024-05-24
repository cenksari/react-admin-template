import React from 'react';

import { Link } from 'react-router-dom';

import Checkbox from '../Forms/Checkbox';

interface IProps {
  from: string;
  image: string;
  subject: string;
}

const MessageLine = ({ from, image, subject }: IProps): React.JSX.Element => {
  const [state, setState] = React.useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.checked);
  };

  return (
    <div className='message flex flex-gap flex-v-center flex-space-between'>
    <div>
      <Checkbox name='message' checked={state} onChange={handleCheckboxChange} />
    </div>
    <div>
      <div className='cover user-photo no-margin' style={{ backgroundImage: `url('${image}')` }} />
    </div>
    <div className='flex-grow'>
      <Link to='/'>{subject}</Link>
      {' '}
      from {from}
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
