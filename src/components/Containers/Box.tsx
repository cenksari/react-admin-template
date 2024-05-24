import React from 'react';

interface IProps {
  type: string;
  icon: string;
  title: string;
  children: React.ReactNode
}

const Box = ({ type, icon, title, children }: IProps): React.JSX.Element => {
  if (type === 'multi') {
    return (
      <div className='box flex-inline'>
        <div className='box-inner flex flex-column'>
          <div className='box-header flex flex-space-between'>
            <span className='box-title no-select'>{title}</span>
            <span className='material-symbols-outlined'>{icon}</span>
          </div>
          <div className='box-content'>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='box'>
      <div className='box-inner'>
        <div className='box-header flex flex-space-between'>
          <span className='box-title no-select'>{title}</span>
          <span className='material-symbols-outlined'>{icon}</span>
        </div>
        <div className='box-content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Box;
