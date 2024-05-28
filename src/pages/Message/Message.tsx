import React from 'react';

import { useParams } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';

import messages from '../../data/messages.json';

const Message = (): React.JSX.Element => {
  const { id } = useParams();

  const [current, setCurrent] = React.useState<any>(null);

  React.useEffect(() => {
    const message = messages.find((item) => item.id === Number(id));

    setCurrent(message);
  }, [id]);

  if (current === null) {
    return (
      <></>
    );
  }

  return (
    <Master>
      <Container>
        <Heading text='Conversation'>
          <form className='flex flex-gap' noValidate>
            <Input
              required
              name='keyword'
              type='text'
              value=''
              tabIndex={0}
              maxLength={64}
              onChange={() => {}}
              placeholder='Please enter keyword'
            />
            <Button type='button' text='Search' />
          </form>
        </Heading>

        <div className='message-body'>
          <h5>{current.subject}</h5>
          <div className='flex flex-gap flex-v-center'>
            <div className='user-photo cover medium' style={{ backgroundImage: `url('${current.image}')` }} />
            <div>
              <div>
                <strong className='from'>{current.name} {current.lastname}</strong>
              </div>
              <div>
                <em className='date'>{current.date}</em>
              </div>
            </div>
          </div>
        </div>

        <Spacer />
      </Container>
    </Master>
  );
};

export default Message;
