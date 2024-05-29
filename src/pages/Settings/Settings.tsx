import React from 'react';

import { Link } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Master from '../../components/Layout/Master';
import Spacer from '../../components/Spacer/Spacer';
import Textarea from '../../components/Forms/Textarea';
import Checkbox from '../../components/Forms/Checkbox';
import Heading from '../../components/Headings/Heading';
import Container from '../../components/Containers/Container';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

interface IFormValues {
  name: '',
  maintenance: boolean;
  maintenanceMessage: string;
  siteName: string;
  siteDesc: string;
  smtpPort: string;
  smtpAddress: string;
  fromMail: string;
  fromName: string;
  comments: boolean,
  activation: boolean,
  appleLogin: boolean;
  googleLogin: boolean,
  guestCheckout: boolean;
}

const buttonGroup = [
  {
    id: 1,
    text: 'General',
    url: '/settings',
    active: true,
  },
  {
    id: 2,
    text: 'Maintenance',
    url: '/settings?filter=maintenance',
    active: false,
  },
  {
    id: 3,
    text: 'Mail settings',
    url: '/settings?filter=mailsettings',
    active: false,
  },
  {
    id: 4,
    text: 'Site features',
    url: '/settings?filter=sitefeatures',
    active: false,
  },
];

const Settings = (): React.JSX.Element => {
  const [values, setValues] = React.useState<IFormValues>({
    name: '',
    maintenance: false,
    maintenanceMessage: 'Site is under maintenance. Thank you for your patience.',
    siteName: 'E-commerce Store',
    siteDesc: 'Worlds greatest e-commerce store',
    smtpPort: '80',
    smtpAddress: 'mail.example.com',
    fromMail: 'noreply@example.com',
    fromName: 'E-commerce Store',
    comments: true,
    activation: true,
    appleLogin: false,
    googleLogin: true,
    guestCheckout: true,
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
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
  };

  return (
    <Master>
      <Container>
        <Heading text='Settings'>
          <div className='flex flex-gap'>
            <Button type='button' text='Templates' />
            <Button type='button' text='Administrators' />
          </div>
        </Heading>

        <ButtonGroup items={buttonGroup} />

        <Spacer />

        <form noValidate onSubmit={handleSubmit}>
          <div className='form-elements'>
            <h4>Logos</h4>
            <div className='form-line'>
              <Link to='/' className='active-opacity'>Click here for logo management</Link>
            </div>
            <h4>General</h4>
            <div className='form-line flex flex-gap'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='siteName'>Site name</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='siteName'
                    type='text'
                    value={values.siteName}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter site name'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='siteDesc'>Site description</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='siteDesc'
                    type='text'
                    value={values.siteDesc}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter site description'
                  />
                </div>
              </div>
            </div>
            <h4>Login mode</h4>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='loginMode'>Select login mode</label>
              </div>
              <div className='input-line'>
                <select name='loginMode' id='loginMode' className='select pointer'>
                  <option value='email'>Users login with email address</option>
                  <option value='phone'>Users login with phone number</option>
                </select>
              </div>
            </div>
            <h4>Maintenance</h4>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='maintenance'>Maintenance mode</label>
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='maintenance'
                  checked={values.maintenance}
                  placeholder='Enable maintenance mode'
                  onChange={handleRadioChange}
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='maintenanceMessage'>Maintenance message</label>
              </div>
              <div className='input-line'>
                <Textarea
                  rows={4}
                  required
                  name='maintenanceMessage'
                  value={values.maintenanceMessage}
                  tabIndex={0}
                  maxLength={128}
                  onChange={handleTextChange}
                  placeholder='Please enter maintenance message'
                />
              </div>
            </div>

            <h4>Mail settings</h4>
            <div className='form-line flex flex-gap'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='fromName'>From name</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='fromName'
                    type='text'
                    value={values.fromName}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter from name'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='fromMail'>From email</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='fromMail'
                    type='email'
                    value={values.fromMail}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter from email'
                  />
                </div>
              </div>
            </div>
            <div className='form-line flex flex-gap'>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='smtpAddress'>SMTP address</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='smtpAddress'
                    type='text'
                    value={values.smtpAddress}
                    tabIndex={0}
                    maxLength={128}
                    onChange={handleTextChange}
                    placeholder='Please enter SMTP address'
                  />
                </div>
              </div>
              <div className='flex-grow'>
                <div className='label-line'>
                  <label htmlFor='smtpPort'>SMTP port</label>
                </div>
                <div className='input-line'>
                  <Input
                    required
                    name='smtpPort'
                    type='number'
                    value={values.smtpPort}
                    tabIndex={0}
                    maxLength={3}
                    onChange={handleTextChange}
                    placeholder='Please enter SMTP port'
                  />
                </div>
              </div>
            </div>
            <h4>Site features</h4>
            <div className='form-line'>
              <div className='label-line'>
                <label>Features</label>
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='appleLogin'
                  checked={values.appleLogin}
                  placeholder='Enable Apple login'
                  onChange={handleRadioChange}
                />
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='googleLogin'
                  checked={values.googleLogin}
                  placeholder='Enable Google login'
                  onChange={handleRadioChange}
                />
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='guestCheckout'
                  checked={values.guestCheckout}
                  placeholder='Enable guest check out'
                  onChange={handleRadioChange}
                />
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='comments'
                  checked={values.comments}
                  placeholder='Enable product comments'
                  onChange={handleRadioChange}
                />
              </div>
              <div className='checkbox-line'>
                <Checkbox
                  name='activation'
                  checked={values.activation}
                  placeholder='New members email activation'
                  onChange={handleRadioChange}
                />
              </div>
            </div>
            <div className='button-line flex flex-gap flex-end'>
              <Button type='submit' text='Save configuration' />
            </div>
          </div>
        </form>
      </Container>
    </Master>
  );
};

export default Settings;
