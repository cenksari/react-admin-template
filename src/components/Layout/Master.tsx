import React from 'react'

interface IProps {
  children: React.ReactNode;
}

const Master = ({ children }: IProps): React.JSX.Element => {
  return (
    <div className='site-frame'>
      {children}
    </div>
  )
}

export default Master;
