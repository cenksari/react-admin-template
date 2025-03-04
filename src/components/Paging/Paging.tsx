import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// components
import Pages from './Pages';
import PagesSelect from './PagesSelect';

// interfaces
interface IProps {
  pageSize: number;
  totalRows: number;
  currentPage: number;
}

const Paging: React.FC<IProps> = ({ pageSize, totalRows, currentPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  const totalPages = Math.ceil(totalRows / pageSize);

  if (totalPages < 1 || currentPage > totalPages) return null;

  /**
   * Navigates to a specific page number.
   *
   * @param {number} pn - The page number to navigate to.
   */
  const buildUrl = (pn: number): string => {
    const queryParams = new URLSearchParams(searchParams);

    queryParams.set('page', pn.toString());

    return `${location.pathname}?${queryParams.toString()}`;
  };

  /**
   * Handles the change event for the page select element.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
   */
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void | Promise<void> =>
    navigate(buildUrl(Number(e.target.value)));

  return (
    <div className='paging flex flex-v-center flex-h-center no-select'>
      <ul className='flex flex-v-center flex-h-center'>
        {currentPage === 1 ? (
          <>
            <li className='disabled'>
              <span className='material-symbols-outlined'>skip_previous</span>
            </li>
            <li className='disabled'>
              <span className='material-symbols-outlined'>navigate_before</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={buildUrl(1)} title='First page'>
                <span className='material-symbols-outlined'>skip_previous</span>
              </Link>
            </li>
            <li>
              <Link to={buildUrl(currentPage - 1)} title='Previous page'>
                <span className='material-symbols-outlined'>navigate_before</span>
              </Link>
            </li>
          </>
        )}

        {totalPages > 8 ? (
          <li className='select-container'>
            <select
              id='pages'
              name='pages'
              aria-label='pages'
              className='pointer'
              defaultValue={currentPage}
              onChange={handleSelectChange}
            >
              <PagesSelect totalPages={totalPages} currentPage={currentPage} />
            </select>
          </li>
        ) : (
          <Pages urlBuilder={buildUrl} totalPages={totalPages} currentPage={currentPage} />
        )}

        {currentPage >= totalPages ? (
          <>
            <li className='disabled'>
              <span className='material-symbols-outlined'>navigate_next</span>
            </li>
            <li className='disabled'>
              <span className='material-symbols-outlined'>skip_next</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={buildUrl(currentPage + 1)} title='Next page'>
                <span className='material-symbols-outlined'>navigate_next</span>
              </Link>
            </li>
            <li>
              <Link to={buildUrl(totalPages)} title='Last page'>
                <span className='material-symbols-outlined'>skip_next</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Paging;
