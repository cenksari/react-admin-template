import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps): React.JSX.Element => {
  return (
    <div className={className ? `container ${className}` : 'container'}>{children}</div>
  );
};

export default Container;
