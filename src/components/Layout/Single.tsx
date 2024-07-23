import React from 'react';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Single = ({ children }: IProps): React.JSX.Element => (
  <div className='single-frame flex flex-v-center'>
    <div className='site-frame max-width'>{children}</div>
  </div>
);

export default Single;
