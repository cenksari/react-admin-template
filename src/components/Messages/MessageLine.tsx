import React from 'react';

import { Link } from 'react-router-dom';

interface IProps {
  id: string;
  from: string;
  image: string;
  subject: string;
}

const MessageLine = ({ id, from, image, subject }: IProps): React.JSX.Element => (
  <div className='message flex flex-gap flex-v-center flex-space-between'>
    <div>
      <div className='cover user-photo' style={{ backgroundImage: `url('${image}')` }} />
    </div>
    <div className='flex flex-v-center flex-grow'>
      <Link to={`/message/${id}`}>{subject}</Link>
      <span className='material-symbols-outlined from'>people</span>
      <strong>{from}</strong>
    </div>
    <div className='flex flex-gap'>
      <button type='button' className='pointer active-opacity'>
        <span className='material-symbols-outlined'>reply</span>
      </button>
      <button type='button' className='pointer active-opacity'>
        <span className='material-symbols-outlined'>delete</span>
      </button>
    </div>
  </div>
);

export default MessageLine;
