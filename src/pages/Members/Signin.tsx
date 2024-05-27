import React from 'react';

import { Link } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Single from '../../components/Layout/Single';
import Spacer from '../../components/Spacer/Spacer';
import Checkbox from '../../components/Forms/Checkbox';
import Container from '../../components/Containers/Container';

import { type IMember } from '../../contexts/MemberContext';

import useMember from '../../hooks/useMember';

interface IFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Signin = (): React.JSX.Element => {
  const { addMember } = useMember();

  const [values, setValues] = React.useState<IFormValues>({
    email: '',
    password: '',
    remember: false,
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked,
    })
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const details: IMember = {
      id: 1,
      name: 'Cenk',
      lastname: 'SARI',
      email: 'cenk@cenksari.com',
      token: '12345678901234567890',
      picture: 'https://i.pravatar.cc/32?img=60',
    };

    addMember(details);
  };

  return (
    <Single>
      <Container>
        <h1>Sign in</h1>
        <p>Please enter your credentials for sign in to dashboard.</p>
        <Spacer />
        <form noValidate onSubmit={handleSubmit}>
          <div className='form-elements'>
            <div className='form-line'>
              <button type='button' className='google-button'>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='18px'
                  height='18px'
                  viewBox='0 0 48 48'
                >
                  <g>
                    <path
                      fill='#EA4335'
                      d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                    />
                    <path
                      fill='#4285F4'
                      d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                    />
                    <path
                      fill='#FBBC05'
                      d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                    />
                    <path
                      fill='#34A853'
                      d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                    />
                  </g>
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
            <div className='or-line'>
              <hr />
              <span>OR</span>
            </div>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='email'>E-mail</label>
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
            <div className='form-line'>
              <div className='label-line flex flex-space-between'>
                <label htmlFor='password'>Password</label>
                <Link to='/'>
                  Forgot password
                </Link>
              </div>
              <div className='input-line'>
                <Input
                  required
                  name='password'
                  type='password'
                  value={values.password}
                  tabIndex={1}
                  maxLength={32}
                  onChange={handleTextChange}
                  placeholder='Please enter your password'
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='remember'>Remember me</label>
              </div>
              <div className='input-line'>
                <Checkbox
                  name='remember'
                  checked={values.remember}
                  placeholder='Remember me for 10 days'
                  onChange={handleRadioChange}
                />
              </div>
            </div>
            <div className='button-line flex flex-gap flex-end'>
              <Button type='submit' text='Sign in' />
            </div>
          </div>
        </form>
      </Container>
    </Single>
  )
}

export default Signin;
