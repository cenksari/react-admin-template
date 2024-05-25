import React from 'react';

interface IProps {
  name: string;
  checked?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ name, checked = false, placeholder, onChange = () => {} }: IProps): React.JSX.Element => (
  <div className='checkbox'>
    <div className='radio-container flex flex-v-center'>
      <label className='radio blue'>
        <input type='checkbox' name={name} id={name} checked={checked} onChange={onChange} />
        <span className='slider round flex flex-v-center flex-h-center' />
      </label>
      {placeholder && (
        <span className='radio-description'>{placeholder}</span>
      )}
    </div>
  </div>
);

export default Checkbox;
