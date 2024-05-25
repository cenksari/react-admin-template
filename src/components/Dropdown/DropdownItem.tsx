import React from 'react';

import { Link } from 'react-router-dom';

interface IProps {
  url: string;
  text: string;
  icon?: string;
  active?: boolean;
}

const DropdownItem = ({ url, text, icon, active }: IProps): React.JSX.Element => (
  <Link className={active === true ? 'flex flex-gap-medium flex-v-center active' : 'flex flex-gap-medium flex-v-center passive'} to={url}>
    {icon && <span className='material-symbols-outlined'>{icon}</span>}
    <em>{text}</em>
  </Link>
);

export default DropdownItem;
