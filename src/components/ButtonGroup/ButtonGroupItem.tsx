import React from 'react';

import { Link } from 'react-router-dom';

interface IProps {
  text: string;
  active?: boolean;
}

const ButtonGroupItem = ({ text, active = false}: IProps): React.JSX.Element => {
  return (
    <li className={active ? 'active' : ''}>
      <Link to='/'>{text}</Link>
    </li>
  )
}

export default ButtonGroupItem;
