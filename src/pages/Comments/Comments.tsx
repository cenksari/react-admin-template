// components
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Paging from '../../components/Paging/Paging';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Heading from '../../components/Headings/Heading';
import CommentRow from '../../components/Tables/CommentRow';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

// data
import comments from '../../data/comments.json';

// variables
const buttonGroup = [
  {
    id: 1,
    text: 'All',
    url: '/comments',
    active: true,
  },
  {
    id: 2,
    text: 'Waiting',
    url: '/comments?filter=waiting',
    active: false,
  },
  {
    id: 3,
    text: 'Published',
    url: '/comments?filter=published',
    active: false,
  },
  {
    id: 4,
    text: 'Unpublished',
    url: '/comments?filter=unpublished',
    active: false,
  },
];

const Comments: React.FC = () => (
  <Master>
    <Container>
      <Heading text='Comments'>
        <form className='flex flex-gap' noValidate>
          <Input
            required
            value=''
            type='text'
            name='keyword'
            maxLength={64}
            onChange={() => {}}
            placeholder='Please enter keyword'
          />
          <Button type='button' text='Search' rightIcon='search' />
        </form>
      </Heading>

      <ButtonGroup items={buttonGroup} />

      <Spacer />

      {comments &&
        comments.map((comment) => (
          <CommentRow
            key={comment.id}
            name={comment.name}
            date={comment.date}
            image={comment.image}
            status={comment.status}
            product={comment.product}
            comment={comment.comment}
          />
        ))}

      <Paging pageSize={30} totalRows={150} currentPage={1} />
    </Container>
  </Master>
);

export default Comments;
