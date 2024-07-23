import React from 'react';

import { useParams } from 'react-router-dom';

// types
import { type IMessage } from '../../types/types';

// components
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Textarea from '../../components/Forms/Textarea';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';

// data
import messages from '../../data/messages.json';

// interfaces
interface IFormValues {
  message: string;
}

const Message = (): React.JSX.Element | null => {
  const { id } = useParams();

  const [values, setValues] = React.useState<IFormValues>({
    message: '',
  });

  const [current, setCurrent] = React.useState<IMessage | undefined>();

  React.useEffect(() => {
    const message = messages.find((item) => item.id === Number(id));

    setCurrent(message);
  }, [id]);

  /**
   * Handles the change event for text inputs and text areas.
   * Updates the state with the new value for the corresponding field.
   *
   * @param {React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>} e - The change event.
   */
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  /**
   * Handles the form submission event.
   * Prevents the default form submission behavior.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  if (current === undefined) {
    return null;
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
              maxLength={64}
              onChange={() => {}}
              placeholder='Please enter keyword'
            />
            <Button type='button' text='Search' rightIcon='search' />
          </form>
        </Heading>

        <div>
          <div className='flex flex-column flex-gap'>
            <div>
              <div className='message-body flex flex-column'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div
                    className='user-photo cover medium'
                    style={{ backgroundImage: `url('${current.image}')` }}
                  />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>
                        {current.name} {current.lastname}
                      </strong>
                    </div>
                    <div>
                      <em className='date'>{current.date}</em>
                    </div>
                  </div>
                </div>
                <div className='content'>{current.message}</div>
                <div className='buttons flex flex-space-between flex-gap'>
                  <Button
                    separator
                    className='light'
                    text='Attachments'
                    leftIcon='attach_file'
                    type='button'
                  />
                  <button type='button' className='flex flex-gap-small pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                    <strong>Delete</strong>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className='message-body flex flex-column right'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div
                    className='user-photo cover medium'
                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=60')` }}
                  />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='buttons flex flex-end flex-gap'>
                  <button type='button' className='flex flex-gap-small pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                    <strong>Delete</strong>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className='message-body flex flex-column'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div
                    className='user-photo cover medium'
                    style={{ backgroundImage: `url('${current.image}')` }}
                  />
                  <div className='flex-grow no-select'>
                    <div>
                      <strong className='from'>
                        {current.name} {current.lastname}
                      </strong>
                    </div>
                    <div>
                      <em className='date'>{current.date}</em>
                    </div>
                  </div>
                </div>
                <div className='content'>{current.message}</div>
                <div className='buttons flex flex-end flex-gap'>
                  <button type='button' className='flex flex-gap-small pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                    <strong>Delete</strong>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className='message-body flex flex-column right'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div
                    className='user-photo cover medium'
                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=60')` }}
                  />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='buttons flex flex-end flex-gap'>
                  <button type='button' className='flex flex-gap-small pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                    <strong>Delete</strong>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className='message-body flex flex-column right'>
                <div className='flex flex-gap flex-v-center flex-space-between'>
                  <div
                    className='user-photo cover medium'
                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=60')` }}
                  />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='buttons flex flex-end flex-gap'>
                  <button type='button' className='flex flex-gap-small pointer active-opacity'>
                    <span className='material-symbols-outlined'>delete</span>
                    <strong>Delete</strong>
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
                    rows={4}
                    required
                    name='message'
                    value={values.message}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter your message'
                  />
                </div>
              </div>
            </div>
            <div className='button-line flex'>
              <div className='flex flex-grow flex-gap'>
                <Button
                  separator
                  type='button'
                  text='Resolved'
                  className='light'
                  rightIcon='expand_all'
                />
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
