import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface IProps {
  children: React.ReactNode;
}

const Master = ({ children }: IProps): React.JSX.Element => (
  <>
    <div className='site-frame'>
      <Header />
      {children}
    </div>
    <Footer />
  </>
);

export default Master;
