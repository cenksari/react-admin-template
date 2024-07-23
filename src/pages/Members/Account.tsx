import React from 'react';

import { Link } from 'react-router-dom';

// components
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Spacer from '../../components/Spacer/Spacer';
import Master from '../../components/Layout/Master';
import Heading from '../../components/Headings/Heading';
import ButtonLink from '../../components/Forms/ButtonLink';
import Container from '../../components/Containers/Container';

// interfaces
interface IFormValues {
  name: string;
  lastname: string;
  email: string;
}

const Account = (): React.JSX.Element => {
  const [values, setValues] = React.useState<IFormValues>({
    name: 'Cenk',
    lastname: 'SARI',
    email: 'cenk@cenksari.com',
  });

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

  return (
    <Master>
      <Container>
        <Heading text='Account'>
          <div className='flex flex-gap'>
            <Button type='button' text='Upload picture' leftIcon='upload' />
            <ButtonLink text='Sign out' url='/members/signout' />
          </div>
        </Heading>
        <div className='flex flex-h-center'>
          <div
            className='user-photo large cover'
            style={{ backgroundImage: `url('https://i.pravatar.cc/300?img=60')` }}
          />
        </div>

        <Spacer />
        <Spacer />

        <form noValidate onSubmit={handleSubmit}>
          <div className='form-elements'>
            <div className='form-line flex flex-gap flex-space-between'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='name'>Name</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='name'
                    type='text'
                    value={values.name}
                    maxLength={32}
                    onChange={handleTextChange}
                    placeholder='Please enter your name'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='lastname'>Last name</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='lastname'
                    type='text'
                    value={values.lastname}
                    maxLength={32}
                    onChange={handleTextChange}
                    placeholder='Please enter last name'
                  />
                </div>
              </div>
            </div>
            <div className='form-line flex flex-gap flex-space-between'>
              <div className='flex-grow'>
                <div className='label-line flex flex-space-between'>
                  <label htmlFor='email'>Email</label>
                  <Link to='/' className='active-opacity'>
                    Change
                  </Link>
                </div>
                <div className='input-line'>
                  <Input
                    readOnly
                    name='email'
                    type='email'
                    value={values.email}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter email address'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line flex flex-space-between'>
                  <label htmlFor='password'>Password</label>
                  <Link to='/' className='active-opacity'>
                    Change
                  </Link>
                </div>
                <div className='input-line'>
                  <Input
                    readOnly
                    name='password'
                    type='password'
                    value='dummypasswordgoeshere'
                    maxLength={32}
                    onChange={handleTextChange}
                    placeholder='Please enter your password'
                  />
                </div>
              </div>
            </div>
            <div className='button-line flex flex-gap flex-end'>
              <Button type='submit' text='Save changes' />
            </div>
          </div>
        </form>
      </Container>
    </Master>
  );
};

export default Account;
