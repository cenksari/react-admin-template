import React from 'react';

interface IProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const Table = ({ header, children }: IProps): React.JSX.Element => (
  <div className='table-containment'>
    <table className='table'>
      <thead>
        {header}
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  </div>
);

export default Table;
