import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  totalPages: number;
  currentPage: number;
}

const Pages: React.FC<IProps> = ({ url, totalPages, currentPage }) => {
  const pageArray = [];

  for (let i = 1; i <= totalPages; i += 1) {
    if (i === currentPage) {
      pageArray.push(
        <li key={i} className='active' title='Current page'>
          <span>{i}</span>
        </li>
      );
    } else {
      pageArray.push(
        <li key={i}>
          <Link to={`${url}?page=${i}`}>
            <span>{i}</span>
          </Link>
        </li>
      );
    }
  }

  return pageArray;
};

export default Pages;
