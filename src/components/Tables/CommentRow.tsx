// components
import Button from '../Forms/Button';

// interfaces
interface IProps {
  name: string;
  date: string;
  image: string;
  product: string;
  comment: string;
  status: string;
}

const CommentRow = ({ name, date, image, product, comment, status }: IProps): JSX.Element => (
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
        <div className='no-select'>
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
    <div className='buttons flex flex-v-center flex-space-between flex-gap'>
      <div className='flex flex-gap no-select'>
        <button type='button' className='flex flex-gap-small pointer active-opacity'>
          <span className='material-symbols-outlined'>reply</span>
          <strong>Reply</strong>
        </button>
        <button type='button' className='flex flex-gap-small pointer active-opacity'>
          <span className='material-symbols-outlined'>delete</span>
          <strong>Delete</strong>
        </button>
      </div>
      <div>
        <Button separator type='button' text={status} className='light' rightIcon='expand_all' />
      </div>
    </div>
  </div>
);

export default CommentRow;
