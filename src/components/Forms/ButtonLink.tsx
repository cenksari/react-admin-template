import React from 'react';

import { Link } from 'react-router-dom';

interface IProps {
  url: string;
  text: string;
}

const ButtonLink = ({ url, text }: IProps): React.JSX.Element => (
  <Link to={url} className='button'>{text}</Link>
);

export default ButtonLink;
