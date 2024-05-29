import React from 'react';

import Button from '../Forms/Button';

interface IProps {
  name: string;
  date: string;
  image: string;
  product: string;
  comment: string;
  status: string;
}

const CommentRow = ({ name, date, image, product, comment, status }: IProps): React.JSX.Element => {
  return (
    <div className='comment'>
      <div>
        <div className='flex flex-gap flex-v-center flex-space-between'>
          <div className='user-photo cover medium' style={{ backgroundImage: `url('${image}')` }} />
          <div className='flex-grow no-select'>
            <div>
              <strong className='from'>{name}</strong>
            </div>
            <div>
              <em className='date'>{date}</em>
            </div>
          </div>
          <div>
            <img src='https://img.icons8.com/?size=30&id=19417&format=png&color=000000' alt='' />
            <img src='https://img.icons8.com/?size=30&id=19417&format=png&color=000000' alt='' />
            <img src='https://img.icons8.com/?size=30&id=19417&format=png&color=000000' alt='' />
            <img src='https://img.icons8.com/?size=30&id=19417&format=png&color=000000' alt='' />
            <img src='https://img.icons8.com/?size=30&id=19417&format=png&color=000000' alt='' />
          </div>
        </div>
      </div>
      <div className='content'>
        <h6>{product}</h6>
        {comment}
      </div>
      <div className='buttons flex flex-end flex-gap'>
        <Button separator type='button' text={status} className='light' rightIcon='expand_all' />
      </div>
    </div>
  );
};

export default CommentRow;
