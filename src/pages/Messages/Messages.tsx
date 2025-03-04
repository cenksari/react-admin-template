// components
import Input from '../../components/Forms/Input';
import Table from '../../components/Tables/Table';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Paging from '../../components/Paging/Paging';
import Heading from '../../components/Headings/Heading';
import MessageRow from '../../components/Tables/MessageRow';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

// data
import messages from '../../data/messages.json';

// variables
const buttonGroup = [
  {
    id: 1,
    text: 'All',
    url: '/messages',
    active: true,
  },
  {
    id: 2,
    text: 'Waiting',
    url: '/messages?filter=waiting',
    active: false,
  },
  {
    id: 3,
    text: 'Resolved',
    url: '/messages?filter=resolved',
    active: false,
  },
  {
    id: 4,
    text: 'Unresolved',
    url: '/messages?filter=unresolved',
    active: false,
  },
];

const Messages: React.FC = () => (
  <Master>
    <Container>
      <Heading text='Messages'>
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

      <Table
        header={
          <tr>
            <th />
            <th />
            <th />
            <th>From</th>
            <th>Subject</th>
            <th className='center'>Status</th>
            <th />
          </tr>
        }
      >
        {messages &&
          messages.map((message) => (
            <MessageRow
              id={message.id}
              key={message.id}
              image={message.image}
              status={message.status}
              subject={message.subject}
              attachments={message.attachments}
              name={`${message.name} ${message.lastname}`}
            />
          ))}
      </Table>

      <Paging pageSize={30} totalRows={100} currentPage={1} />
    </Container>
  </Master>
);

export default Messages;
