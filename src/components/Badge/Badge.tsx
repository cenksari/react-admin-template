import React from 'react';

interface IProps {
  text: string;
  icon?: string;
  color: string;
}

const Badge = ({ text, icon, color }: IProps): React.JSX.Element => {
  return (
    <div className={`badge no-select ${color}`}>
      {icon && <span className='material-symbols-outlined'>{icon}</span>}
      {text}
    </div>
  );
};

export default Badge;
