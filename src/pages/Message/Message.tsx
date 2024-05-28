import React from 'react';

import { useParams } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';

import messages from '../../data/messages.json';
import Textarea from '../../components/Forms/Textarea';
import ButtonLink from '../../components/Forms/ButtonLink';

interface IFormValues {
  message: string;
}

const Message = (): React.JSX.Element => {
  const { id } = useParams();

  const [current, setCurrent] = React.useState<any>(null);
  const [values, setValues] = React.useState<IFormValues>({
    message: '',
  });

  React.useEffect(() => {
    const message = messages.find((item) => item.id === Number(id));

    setCurrent(message);
  }, [id]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  if (current === null) {
    return (
      <></>
    );
  }

  return (
    <Master>
      <Container>
        <Heading text={current.subject}>
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
            <Button type='button' text='Search' rightIcon='search' />
          </form>
        </Heading>

        <div>
          <div className='flex flex-column flex-gap'>
            <div className='flex flex-start'>
              <div className='message-body flex flex-column'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div className='user-photo cover medium' style={{ backgroundImage: `url('${current.image}')` }} />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>{current.name} {current.lastname}</strong>
                    </div>
                    <div>
                      <em className='date'>{current.date}</em>
                    </div>
                  </div>
                  <div className='flex flex-v-center flex-gap-small'>
                    <ButtonLink text='Attachments' url='/' leftIcon='attach_file' />
                  </div>
                </div>
                <div className='content'>
                  {current.message}
                </div>
              </div>
            </div>

            <div className='flex flex-end'>
              <div className='message-body flex flex-column right'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div className='user-photo cover medium' style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=60')` }} />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>Customer centre</strong>
                    </div>
                    <div>
                      <em className='date'>May 14, 2024 14:00</em>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='flex flex-end flex-gap'>
                  <button type='button' className='pointer active-opacity'>
                    <span className='material-symbols-outlined'>forward</span>
                  </button>
                  <button type='button' className='pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                  </button>
                </div>
              </div>
            </div>

            <div className='flex flex-start'>
              <div className='message-body flex flex-column'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div className='user-photo cover medium' style={{ backgroundImage: `url('${current.image}')` }} />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>{current.name} {current.lastname}</strong>
                    </div>
                    <div>
                      <em className='date'>{current.date}</em>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  {current.message}
                </div>
              </div>
            </div>

            <div className='flex flex-end'>
              <div className='message-body flex flex-column right'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div className='user-photo cover medium' style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=60')` }} />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>Customer centre</strong>
                    </div>
                    <div>
                      <em className='date'>May 14, 2024 14:00</em>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='flex flex-end flex-gap'>
                  <button type='button' className='pointer active-opacity'>
                    <span className='material-symbols-outlined'>forward</span>
                  </button>
                  <button type='button' className='pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                  </button>
                </div>
              </div>
            </div>

            <div className='flex flex-end'>
              <div className='message-body flex flex-column right'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div className='user-photo cover medium' style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=60')` }} />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>Customer centre</strong>
                    </div>
                    <div>
                      <em className='date'>May 14, 2024 14:00</em>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='flex flex-end flex-gap'>
                  <button type='button' className='pointer active-opacity'>
                    <span className='material-symbols-outlined'>forward</span>
                  </button>
                  <button type='button' className='pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Spacer />

        <div className=''>
          <form noValidate onSubmit={handleSubmit}>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='label-line'>
                  <label htmlFor='message'>New message</label>
                </div>
                <div className='input-line'>
                  <Textarea
                    rows={2}
                    required
                    name='message'
                    value={values.message}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter your message'
                  />
                </div>
              </div>
            </div>
            <div className='button-line flex'>
              <div className='flex flex-grow flex-gap'>
                <Button separator type='button' text='Resolved' className='light' rightIcon='arrow_downward' />
              </div>
              <div className='flex flex-end'>
                <Button type='submit' text='Send message' rightIcon='send' />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Master>
  );
};

export default Message;
