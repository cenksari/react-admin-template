import React from 'react';

import { Link } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Single from '../../components/Layout/Single';
import Spacer from '../../components/Spacer/Spacer';
import Container from '../../components/Containers/Container';

interface IFormValues {
  email: string;
}

const Forgot = (): React.JSX.Element => {
  const [values, setValues] = React.useState<IFormValues>({
    email: '',
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <Single>
      <Container>
        <h1>Forgot password</h1>
        <p>Please enter your email address, we will send an email message to you for password reset instructions.</p>
        <Spacer />
        <form noValidate onSubmit={handleSubmit}>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='label-line flex flex-space-between'>
                <label htmlFor='email'>E-mail</label>
                <Link to='/' className='active-opacity'>
                  Sign in to your account
                </Link>
              </div>
              <div className='input-line'>
                <Input
                  required
                  name='email'
                  type='email'
                  value={values.email}
                  tabIndex={0}
                  maxLength={128}
                  onChange={handleTextChange}
                  placeholder='Please enter your email address'
                />
              </div>
            </div>
            <div className='button-line flex flex-gap flex-end'>
              <Button type='submit' text='Reset password' />
            </div>
          </div>
        </form>
      </Container>
    </Single>
  )
}

export default Forgot;
