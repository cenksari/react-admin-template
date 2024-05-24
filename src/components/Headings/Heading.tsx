import React from 'react'

interface IProps {
  text: string;
  children: React.ReactNode;
}

const Heading = ({ text, children }: IProps): React.JSX.Element => {
  return (
    <div className='flex flex-v-center flex-space-between'>
      <h1>{text}</h1>
      <div className='input-group flex'>
        {children}
      </div>
    </div>
  )
}

export default Heading;
