import { Link } from 'react-router-dom';

// interfaces
interface IProps {
  totalPages: number;
  currentPage: number;
  urlBuilder: (pn: number) => string;
}

const Pages: React.FC<IProps> = ({ totalPages, currentPage, urlBuilder }) => {
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
          <Link to={urlBuilder(i)}>
            <span>{i}</span>
          </Link>
        </li>
      );
    }
  }

  return pageArray;
};

export default Pages;
