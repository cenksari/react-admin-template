import React from 'react';

import { Link } from 'react-router-dom';

interface IProps {
  url: string;
  text: string;
  active?: boolean;
}

const DropdownItem = ({ url, text, active }: IProps): React.JSX.Element => (
  <Link className={active === true ? 'active' : 'passive'} to={`/${url}`}>
    {text}
  </Link>
);

export default DropdownItem;
