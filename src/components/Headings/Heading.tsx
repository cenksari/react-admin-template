import React from 'react';

interface IProps {
  text: string;
  children?: React.ReactNode;
}

const Heading = ({ text, children }: IProps): React.JSX.Element => (
  <div className='flex flex-space-between heading'>
    <h1>{text}</h1>
    {children && (
      <div className='input-group'>
        {children}
      </div>
    )}
  </div>
);

export default Heading;
