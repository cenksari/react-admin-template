import React from 'react';

// interfaces
interface IProps {
  color: string;
  children: React.ReactNode;
}

const Dropdown = ({ color, children }: IProps): React.JSX.Element => (
  <div className={`dropdown no-select ${color}`}>{children}</div>
);

export default Dropdown;
